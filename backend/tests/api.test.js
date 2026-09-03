process.env.NODE_ENV = 'test';

const { test, describe, before, after } = require('node:test');
const assert = require('node:assert');
const mongoose = require('mongoose');

const { app } = require('../server');

let testServer;
let BASE_URL = '';
let authToken = '';
let createdProjectId = '';
let createdInventoryId = '';

const request = async (endpoint, options = {}) => {
  const url = `${BASE_URL}${endpoint}`;
  const headers = {
    'Content-Type': 'application/json',
    ...(options.token ? { 'Authorization': `Bearer ${options.token}` } : {}),
    ...(options.headers || {})
  };

  const res = await fetch(url, {
    method: options.method || 'GET',
    headers,
    body: options.body ? JSON.stringify(options.body) : undefined
  });

  const contentType = res.headers.get('content-type') || '';
  let body = null;
  if (contentType.includes('application/json')) {
    body = await res.json();
  } else {
    body = await res.text();
  }

  return { status: res.status, body, headers: res.headers };
};

describe('BuildTrack Platform Automated Test Suite', () => {

  before(async () => {
    await new Promise((resolve) => {
      testServer = app.listen(0, () => {
        const port = testServer.address().port;
        BASE_URL = `http://127.0.0.1:${port}`;
        resolve();
      });
    });

    if (mongoose.connection.readyState !== 1) {
      await new Promise((resolve) => {
        mongoose.connection.once('open', resolve);
        setTimeout(resolve, 3000);
      });
    }
  });

  describe('1. Health Check & Public Endpoints', () => {
    test('GET /api/health should return 200 with healthy status', async () => {
      const res = await request('/api/health');
      assert.strictEqual(res.status, 200);
      assert.strictEqual(res.body.status, 'healthy');
      assert.ok(res.body.timestamp);
    });
  });

  describe('2. Authentication & Authorization Security', () => {
    const testEmail = `test.eng.${Date.now()}@buildtrack.io`;
    const testMobile = `98${Math.floor(10000000 + Math.random() * 90000000)}`;

    test('POST /api/auth/register should fail with invalid security code', async () => {
      const res = await request('/api/auth/register', {
        method: 'POST',
        body: {
          name: 'Test Engineer',
          email: testEmail,
          mobile: testMobile,
          password: 'Password123!',
          role: 'Site Engineer',
          securityCode: '999'
        }
      });
      assert.strictEqual(res.status, 400);
      assert.strictEqual(res.body.success, false);
      assert.strictEqual(res.body.msg, 'Invalid authorization code');
    });

    test('POST /api/auth/register should fail with missing required fields', async () => {
      const res = await request('/api/auth/register', {
        method: 'POST',
        body: {
          name: 'Test User',
          securityCode: '002'
        }
      });
      assert.strictEqual(res.status, 400);
      assert.strictEqual(res.body.success, false);
    });

    test('POST /api/auth/register should succeed with valid code and fields', async () => {
      const res = await request('/api/auth/register', {
        method: 'POST',
        body: {
          name: 'Senior Test Engineer',
          email: testEmail,
          mobile: testMobile,
          password: 'Password123!',
          role: 'Project Manager',
          department: 'Civil Infrastructure',
          securityCode: '002'
        }
      });
      assert.strictEqual(res.status, 201);
      assert.strictEqual(res.body.success, true);
      assert.ok(res.body.token);
      assert.strictEqual(res.body.user.email, testEmail.toLowerCase());
      authToken = res.body.token;
    });

    test('POST /api/auth/login should fail with incorrect password', async () => {
      const res = await request('/api/auth/login', {
        method: 'POST',
        body: {
          email: testEmail,
          password: 'WrongPassword999'
        }
      });
      assert.strictEqual(res.status, 401);
      assert.strictEqual(res.body.success, false);
    });

    test('POST /api/auth/login should succeed with valid credentials', async () => {
      const res = await request('/api/auth/login', {
        method: 'POST',
        body: {
          email: testEmail,
          password: 'Password123!'
        }
      });
      assert.strictEqual(res.status, 200);
      assert.strictEqual(res.body.success, true);
      assert.ok(res.body.token);
      assert.ok(res.body.user);
    });

    test('GET /api/projects without token should be rejected with 401', async () => {
      const res = await request('/api/projects');
      assert.strictEqual(res.status, 401);
      assert.strictEqual(res.body.success, false);
    });
  });

  describe('3. Project Management Workflow APIs', () => {
    test('POST /api/projects should create a new construction project', async () => {
      const projectPayload = {
        name: `Automated Test Site ${Date.now()}`,
        client: 'Infosys Smart Campus Ltd',
        category: 'Commercial',
        budget: 4500000,
        status: 'Ongoing',
        progress: 15,
        location: 'Bangalore Phase 2',
        startDate: new Date().toISOString(),
        endDate: new Date(Date.now() + 180 * 24 * 60 * 60 * 1000).toISOString()
      };

      const res = await request('/api/projects', {
        method: 'POST',
        token: authToken,
        body: projectPayload
      });

      assert.ok(res.status === 200 || res.status === 201, `Status was ${res.status}: ${JSON.stringify(res.body)}`);
      assert.strictEqual(res.body.success, true);
      assert.ok(res.body.data._id);
      createdProjectId = res.body.data._id;
    });

    test('GET /api/projects should return project portfolio list', async () => {
      const res = await request('/api/projects', { token: authToken });
      assert.strictEqual(res.status, 200);
      assert.strictEqual(res.body.success, true);
      assert.ok(Array.isArray(res.body.data));
      assert.ok(res.body.data.length > 0);
    });
  });

  describe('4. Inventory & Procurement Modules', () => {
    test('POST /api/inventory should create a material item', async () => {
      const itemPayload = {
        name: 'UltraTech Super Cement Grade 53',
        category: 'Cement & Concrete',
        quantity: 450,
        unit: 'Bags',
        unitPrice: 380,
        reorderLevel: 80,
        location: 'Warehouse Bay 4'
      };

      const res = await request('/api/inventory', {
        method: 'POST',
        token: authToken,
        body: itemPayload
      });

      assert.ok(res.status === 200 || res.status === 201);
      assert.strictEqual(res.body.success, true);
      assert.ok(res.body.data._id);
      createdInventoryId = res.body.data._id;
    });

    test('GET /api/inventory should return materials stock inventory', async () => {
      const res = await request('/api/inventory', { token: authToken });
      assert.strictEqual(res.status, 200);
      assert.strictEqual(res.body.success, true);
      assert.ok(Array.isArray(res.body.data));
    });

    test('GET /api/procurements should list purchase orders', async () => {
      const res = await request('/api/procurements', { token: authToken });
      assert.strictEqual(res.status, 200);
      assert.strictEqual(res.body.success, true);
      assert.ok(Array.isArray(res.body.data));
    });
  });

  describe('5. Milestone 4: Analytics Dashboard & Reporting Aggregations', () => {
    test('GET /api/analytics/dashboard should return operational KPI summary and chart data', async () => {
      const res = await request('/api/analytics/dashboard', { token: authToken });
      assert.strictEqual(res.status, 200);
      assert.strictEqual(res.body.success, true);
      assert.ok(res.body.data.summary);
      
      const { summary, charts } = res.body.data;
      assert.strictEqual(typeof summary.totalBudget, 'number');
      assert.strictEqual(typeof summary.activeProjects, 'number');
      assert.strictEqual(typeof summary.inventoryTotalValue, 'number');
      assert.strictEqual(typeof summary.attendanceRate, 'number');
      assert.strictEqual(typeof summary.poTotalSpent, 'number');

      assert.ok(charts.projectSpend);
      assert.ok(charts.procurementCategories);
      assert.ok(charts.projectStatuses);
      assert.ok(charts.inventoryStockStatus);
      assert.strictEqual(typeof charts.inventoryStockStatus.adequate, 'number');
      assert.strictEqual(typeof charts.inventoryStockStatus.lowStock, 'number');
    });

    test('GET /api/reports/data should return cross-module unified report records', async () => {
      const res = await request('/api/reports/data', { token: authToken });
      assert.strictEqual(res.status, 200);
      assert.strictEqual(res.body.success, true);
      assert.ok(Array.isArray(res.body.data));
      assert.ok(res.body.count >= 0);

      if (res.body.data.length > 0) {
        const item = res.body.data[0];
        assert.ok(item.id);
        assert.ok(item.module);
        assert.ok(item.title);
        assert.ok(item.category);
        assert.ok(item.reference);
        assert.strictEqual(typeof item.amount, 'number');
        assert.ok(item.status);
      }
    });

    test('GET /api/reports/data?module=procurement should filter records by module', async () => {
      const res = await request('/api/reports/data?module=procurement', { token: authToken });
      assert.strictEqual(res.status, 200);
      assert.strictEqual(res.body.success, true);
      res.body.data.forEach(item => {
        assert.strictEqual(item.module, 'Procurement');
      });
    });

    test('GET /api/reports/data?search=Cement should filter records by search term', async () => {
      const res = await request('/api/reports/data?search=Cement', { token: authToken });
      assert.strictEqual(res.status, 200);
      assert.strictEqual(res.body.success, true);
      assert.ok(Array.isArray(res.body.data));
    });
  });

  after(async () => {
    if (testServer) {
      testServer.close();
    }
    await mongoose.connection.close();
  });
});
