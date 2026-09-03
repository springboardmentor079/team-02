# BuildTrack - Construction Project Management System

BuildTrack is a web application built to manage construction projects, track on-site operations, and keep everyone from site engineers to project managers and clients on the same page.

It helps manage project timelines, daily worker attendance, material inventory, equipment allocation, purchase orders, blueprints/documents, and automated alerts for low stock.

---

## Features

- **Dashboard & Analytics:** Overview of all ongoing projects, overall budget vs actual spending, labor attendance rate, and inventory valuation charts.
- **Projects & Milestones:** Create projects, add milestone phases (Foundation, Structure, MEP, Finishing), and automatically update overall project completion percentage when milestones are finished.
- **Site Daily Logs:** Site engineers can submit daily logs with weather, workforce count, equipment used, and site notes.
- **Inventory & Deliveries:** Track building materials (cement, steel, bricks, sand, etc.), set minimum threshold alerts when stock is running low, and verify incoming truck deliveries.
- **Procurement & POs:** Create purchase orders, send them for manager approval, track vendor quotes, and monitor project material expenses.
- **Labor & Attendance:** Maintain a worker directory with daily wage rates, mark daily attendance (Present, Half-day, Absent, Overtime), and calculate wages.
- **Heavy Machinery & Equipment:** Track equipment like excavators, cranes, and concrete mixers. Allocate them to active sites and log maintenance schedules.
- **Document Vault:** Upload and organize blueprints, municipal permits, safety compliance reports, and contracts.
- **Alerts & Notifications:** In-app notification center, automated low-stock warnings, and email/SMS OTP verification.
- **Reports:** Filter site data by date or module and export records to CSV or print view.

---

## Tech Stack

- **Frontend:** Angular 17, TypeScript, Bootstrap 5, Tailwind CSS, Chart.js
- **Backend:** Node.js, Express.js, MongoDB (Mongoose), JWT Auth
- **Email & SMS:** Nodemailer (Gmail / SMTP), Fast2SMS, Twilio
- **DevOps:** Docker, Docker Compose, Render

---

## Project Structure

```text
Infosys/
├── backend/
│   ├── config/             # Database connection
│   ├── middleware/         # Auth & token verification
│   ├── models/             # Mongoose schemas (Project, Inventory, Worker, User, etc.)
│   ├── tests/              # API test suite
│   ├── .env.example        # Sample environment variables
│   ├── package.json
│   ├── seedNow.js          # Demo data seeding script
│   └── server.js           # Express app & API routes
├── frontend/
│   ├── src/
│   │   ├── app/
│   │   │   ├── components/ # Angular components (Dashboard, Projects, Inventory, etc.)
│   │   │   ├── services/   # API call services
│   │   │   ├── app-routing.module.ts
│   │   │   └── app.module.ts
│   │   └── main.ts
│   ├── package.json
│   └── dev-server.js
├── index.html              # Standalone web client / dashboard view
├── docker-compose.yml      # Run app + MongoDB in containers
├── Dockerfile              # Production multi-stage Docker build
└── render.yaml             # Render deployment configuration
```

---

## Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (v20 or higher recommended)
- [MongoDB](https://www.mongodb.com/) (running locally or a MongoDB Atlas URI)
- [Git](https://git-scm.com/)

---

### Step 1: Clone the Project
```bash
git clone <your-repo-link>
cd Infosys
```

---

### Step 2: Set Up Backend

1. Go to the backend folder:
   ```bash
   cd backend
   npm install
   ```

2. Create a `.env` file inside `backend/`:
   ```bash
   cp .env.example .env
   ```

3. Open `.env` and configure your settings:
   ```env
   PORT=5000
   MONGODB_URI=mongodb://localhost:27017/buildtrack
   JWT_SECRET=mysecretkey123
   NODE_ENV=development

   # Optional (for real email OTPs via Gmail):
   EMAIL_USER=your-email@gmail.com
   EMAIL_PASS=your-google-app-password
   EMAIL_HOST=smtp.gmail.com
   EMAIL_PORT=587

   # Optional (for SMS OTPs):
   FAST2SMS_API_KEY=
   TWILIO_ACCOUNT_SID=
   TWILIO_AUTH_TOKEN=
   TWILIO_PHONE_NUMBER=
   ```
   *(Note: If you leave `EMAIL_USER` blank, Nodemailer will use an Ethereal test account and print test email links to the console.)*

4. Seed demo data (sample projects, workers, inventory, equipment, etc.):
   ```bash
   node seedNow.js
   ```

5. Start the backend server:
   ```bash
   npm run dev
   ```
   The backend API will run on `http://localhost:5000`.

---

### Step 3: Set Up Frontend

Open a new terminal window and run:

```bash
cd frontend
npm install
npm start
```

The Angular frontend will start at `http://localhost:4200` (or `http://localhost:3000` via dev server).

---

## Running with Docker

If you have Docker and Docker Compose installed, you can start the entire app with a single command:

```bash
docker-compose up --build
```

This will spin up:
- The BuildTrack app at `http://localhost:5000`
- MongoDB container at port `27017`

To stop:
```bash
docker-compose down
```

---

## User Roles

The platform supports different user roles with specific access levels:

| Role | Description |
| :--- | :--- |
| **Administrator** | Full access to manage users, site settings, approvals, and system data. |
| **Project Manager** | Manages project deadlines, milestones, budget allocations, and approves POs. |
| **Site Engineer** | Submits daily site logs, marks worker attendance, and requests equipment. |
| **Contractor** | Manages assigned trade workers and checks delivery arrivals. |
| **Worker** | Views assigned daily tasks and attendance history. |
| **Client** | Read-only access to view milestone progress, photos, and project health. |

---

## Main API Endpoints

All backend routes are prefixed with `/api`.

- **Auth & Users:**
  - `POST /api/auth/register` — Register a new account
  - `POST /api/auth/login` — Login & get JWT token
  - `POST /api/auth/send-otp-email` — Send password reset OTP
  - `POST /api/auth/reset-password` — Reset password using OTP
  - `GET /api/users` — List users
  - `PUT /api/users/:id/approve` — Approve user signup
- **Projects & Milestones:**
  - `GET /api/projects` — Get all projects
  - `POST /api/projects` — Create a new project
  - `GET /api/projects/:id` — Get project details
  - `PUT /api/milestones/:id` — Update milestone (auto-updates project progress %)
  - `POST /api/progress-logs` — Submit daily site log
- **Inventory & Logistics:**
  - `GET /api/inventory` — List stock materials
  - `POST /api/inventory` — Add material
  - `GET /api/inventory/deliveries` — List shipments
  - `PUT /api/inventory/deliveries/:id/verify` — Confirm delivery & update stock
- **Procurement:**
  - `GET /api/procurements` — List purchase orders
  - `POST /api/procurements` — Create PO
  - `PUT /api/procurements/:id` — Approve or reject PO
- **Workforce & Attendance:**
  - `GET /api/workers` — Worker directory
  - `POST /api/workers` — Add new worker
  - `GET /api/attendance` — View attendance by date
  - `POST /api/attendance` — Submit daily attendance sheet
- **Equipment & Resources:**
  - `GET /api/resources` — List machinery and tools
  - `PUT /api/resources/:id/allocate` — Allocate equipment to site
  - `PUT /api/resources/:id/release` — Release equipment back to yard
- **Documents & Notifications:**
  - `GET /api/documents` — View uploaded files and blueprints
  - `POST /api/documents` — Upload new document
  - `GET /api/notifications` — Get user notifications
  - `POST /api/notifications/trigger-system-alert` — Run stock & PO alert check
- **Analytics & Health:**
  - `GET /api/analytics/dashboard` — Dashboard metrics & chart data
  - `GET /api/reports/data` — Exportable reporting data
  - `GET /api/health` — API health status

---

## Running Tests

To run the backend integration tests:

```bash
cd backend
npm test
```

This will run automated checks for authentication, projects, inventory, workforce attendance, and procurement endpoints.

---

## Troubleshooting & Tips

- **MongoDB connection error:** If you see a connection error, make sure MongoDB service is running locally (`mongod` or via Windows Services), or verify your MongoDB Atlas connection string in `backend/.env`.
- **Gmail SMTP authentication:** If you want to use Gmail for sending emails, make sure 2-Step Verification is enabled on your Google account and generate an **App Password** (16 characters) instead of using your normal account password.
- **Port already in use:** If port 5000 is occupied, you can change `PORT=5000` to another port in `backend/.env` and update your frontend proxy/API URL accordingly.

---

## License

This project is licensed under the [MIT License](LICENSE).