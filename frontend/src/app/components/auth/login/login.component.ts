import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-login',
  template: `
    <div class="auth-container font-Outfit">
      <!-- Top fixed notification toast (Popup) -->
      <div class="toast-message" *ngIf="toastMsg" [ngClass]="toastType">
        <span class="toast-content">{{ toastMsg }}</span>
      </div>

      <!-- Split Layout Box -->
      <div class="auth-box">
        <!-- Left Side: Info Banner -->
        <div class="info-banner">
          <div class="banner-overlay"></div>
          
          <div class="banner-top">
            <div class="logo-wrapper">
              <span class="logo-icon">👷</span>
            </div>
            <h2 class="banner-title">BuildTrack Portal</h2>
            <p class="banner-desc">
              Enterprise monitoring and operational management platform. Log daily site completions, machinery workloads, budgets, and procurements.
            </p>
            <div class="status-badge">
              System Status: Active connection established.
            </div>
          </div>

          <div class="banner-features">
            <div class="feature-item">
              <span class="feature-icon">🛡️</span>
              <span class="feature-text">Role-Based Access Control Restrictions</span>
            </div>
            <div class="feature-item">
              <span class="feature-icon">📊</span>
              <span class="feature-text">Interactive Recharts Analytics & Statistics</span>
            </div>
            <div class="feature-item">
              <span class="feature-icon">📥</span>
              <span class="feature-text">PDF & Excel Reporting Compilation Exports</span>
            </div>
          </div>

          <div class="banner-footer">
            BUILDTRACK OPERATIONS V2.4
          </div>
        </div>

        <!-- Right Side: Forms -->
        <div class="form-wrapper">
          <div class="form-header">
            <h3 class="form-title">
              {{ isForgot ? 'Reset Password' : isRegister ? 'Register Account' : 'Security Sign In' }}
            </h3>
            <button *ngIf="!isForgot" class="switch-link" (click)="toggleRegister()">
              {{ isRegister ? 'Switch to Login' : 'Create an Account' }}
            </button>
          </div>

          <!-- 1. Login Form -->
          <form *ngIf="!isForgot && !isRegister" [formGroup]="loginForm" (ngSubmit)="onSubmit()" class="space-y-4">
            <div class="field-group">
              <label class="input-label">Email Address</label>
              <input type="email" formControlName="email" placeholder="pm@buildtrack.io" class="input-field">
            </div>

            <div class="field-group">
              <div class="label-row">
                <label class="input-label">Password</label>
                <button type="button" class="forgot-link" (click)="toggleForgot(true)">Forgot Password?</button>
              </div>
              <input type="password" formControlName="password" placeholder="••••••••" class="input-field">
            </div>

            <button type="submit" class="submit-btn" [disabled]="loading">
              {{ loading ? 'Authenticating...' : 'Authenticate Session' }}
            </button>
          </form>

          <!-- 2. Register Form -->
          <div *ngIf="isRegister && !isForgot">
            <!-- Step 1: Registration Form Details -->
            <form *ngIf="registerStep === 1" [formGroup]="registerForm" (ngSubmit)="onRegisterSubmit()" class="space-y-4">
              <div class="field-group">
                <label class="input-label">Full Name</label>
                <input type="text" formControlName="name" placeholder="Emily Watson" class="input-field">
              </div>

              <div class="field-group">
                <label class="input-label">Email Address</label>
                <input type="email" formControlName="email" placeholder="you@company.com" class="input-field">
              </div>

              <div class="field-group">
                <label class="input-label">Mobile Number</label>
                <input type="text" formControlName="mobile" placeholder="9876543210" class="input-field">
              </div>

              <div class="grid-2">
                <div class="field-group">
                  <label class="input-label">Clearance Role</label>
                  <select formControlName="role" class="input-field select-field">
                    <option value="Worker">Worker</option>
                    <option value="Client">Client</option>
                    <option value="Contractor">Contractor</option>
                    <option value="Site Engineer">Site Engineer</option>
                    <option value="Project Manager">Project Manager</option>
                    <option value="Administrator">Administrator</option>
                  </select>
                </div>
                <div class="field-group">
                  <label class="input-label">Department</label>
                  <input type="text" formControlName="department" placeholder="Planning Dept" class="input-field">
                </div>
              </div>

              <div class="field-group">
                <label class="input-label">Authorization Code</label>
                <input type="password" formControlName="securityCode" placeholder="••••" class="input-field">
              </div>

              <div class="field-group">
                <label class="input-label">Password</label>
                <input type="password" formControlName="password" placeholder="••••••••" class="input-field">
              </div>

              <button type="submit" class="submit-btn" [disabled]="loading">
                {{ loading ? 'Registering...' : 'Complete Onboarding' }}
              </button>
            </form>
          </div>

          <!-- 3. Forgot Password Form -->
          <div *ngIf="isForgot" class="space-y-4">
            <!-- Step 1a: Choose Method -->
            <div *ngIf="forgotStep === 1 && !forgotMethod" class="space-y-4">
              <p class="form-desc text-center">
                Select your verification method to reset password:
              </p>
              <div class="method-selector-container">
                <button type="button" class="method-btn" (click)="setForgotMethod('email')">
                  <span class="method-icon">📧</span>
                  <span class="method-title">Email Verification</span>
                  <span class="method-desc">Send code to registered email address</span>
                </button>
                <button type="button" class="method-btn" (click)="setForgotMethod('mobile')">
                  <span class="method-icon">📱</span>
                  <span class="method-title">Mobile Verification</span>
                  <span class="method-desc">Send SMS code to registered Indian number</span>
                </button>
              </div>
            </div>

            <!-- Step 1b: Request OTP Form -->
            <form *ngIf="forgotStep === 1 && forgotMethod" [formGroup]="forgotForm" (ngSubmit)="requestOtp()" class="space-y-4">
              <p class="form-desc">
                Enter your registered {{ forgotMethod === 'email' ? 'Email address' : 'Indian mobile number' }}. We will generate a verification OTP to reset your password.
              </p>
              
              <div class="field-group">
                <label class="input-label">{{ forgotMethod === 'email' ? 'Email Address' : 'Mobile Number' }}</label>
                <input [type]="forgotMethod === 'email' ? 'email' : 'text'" formControlName="mobile" [placeholder]="forgotMethod === 'email' ? 'you@company.com' : '9876543210'" class="input-field">
              </div>

              <div class="grid-2">
                <button type="button" class="shortcut-btn" (click)="forgotMethod = null" style="padding: 12px;">Back</button>
                <button type="submit" class="submit-btn" [disabled]="loading">
                  {{ loading ? 'Sending...' : 'Send OTP Code' }}
                </button>
              </div>
            </form>

            <!-- Step 2: Verify OTP and Reset -->
            <form *ngIf="forgotStep === 2" [formGroup]="resetForm" (ngSubmit)="resetPassword()">
              <p class="form-desc success-banner">
                Verification code sent successfully to your account!
              </p>

              <div class="field-group">
                <label class="input-label">Verification Code (OTP)</label>
                <input type="text" formControlName="otp" placeholder="Enter OTP" class="input-field">
              </div>

              <div class="field-group">
                <label class="input-label">New Password</label>
                <input type="password" formControlName="password" placeholder="••••••••" class="input-field">
              </div>

              <div class="field-group">
                <label class="input-label">Confirm New Password</label>
                <input type="password" formControlName="confirmPassword" placeholder="••••••••" class="input-field">
              </div>

              <button type="submit" class="submit-btn" [disabled]="loading">
                {{ loading ? 'Resetting...' : 'Update Password' }}
              </button>
            </form>

            <button type="button" class="back-link" (click)="toggleForgot(false)">Back to Sign In</button>
          </div>

          <!-- Demo shortcuts -->
          <div class="shortcuts-section" *ngIf="!isForgot && !isRegister">
            <span class="shortcuts-title">PRE-AUTHORIZED DEMO LOGINS</span>
            <div class="shortcuts-grid">
              <button (click)="loginShortcut('engineer@buildtrack.io')" class="shortcut-btn">Sanjay (Engineer)</button>
              <button (click)="loginShortcut('pm@buildtrack.io')" class="shortcut-btn">Laura (Manager)</button>
              <button (click)="loginShortcut('admin@buildtrack.io')" class="shortcut-btn">James (Admin)</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .auth-container {
      min-height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: #0f172a; /* bg-slate-900 */
      padding: 16px;
      position: relative;
      overflow: hidden;
    }
    .auth-container::before {
      content: '';
      position: absolute;
      top: 25%;
      left: 25%;
      width: 384px;
      height: 384px;
      background-color: rgba(59, 130, 246, 0.1);
      border-radius: 9999px;
      filter: blur(64px);
    }
    .auth-box {
      width: 100%;
      max-width: 896px;
      display: grid;
      grid-template-columns: 1fr;
      border-radius: 24px;
      overflow: hidden;
      box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
      border: 1px solid #1e293b;
      background-color: rgba(2, 6, 23, 0.8);
      backdrop-filter: blur(12px);
    }
    @media (min-width: 768px) {
      .auth-box {
        grid-template-columns: 1fr 1fr;
      }
    }
    .info-banner {
      padding: 40px;
      background: linear-gradient(to bottom right, #2563eb, #1d4ed8, #312e81);
      color: #ffffff;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      position: relative;
      overflow: hidden;
    }
    .banner-overlay {
      position: absolute;
      top: 0;
      right: 0;
      width: 256px;
      height: 256px;
      background-color: rgba(255, 255, 255, 0.05);
      border-radius: 9999px;
      filter: blur(40px);
      transform: translate(40px, -40px);
    }
    .logo-wrapper {
      width: 48px;
      height: 48px;
      border-radius: 12px;
      background-color: rgba(255, 255, 255, 0.2);
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 24px;
    }
    .logo-icon {
      font-size: 24px;
    }
    .banner-title {
      font-size: 28px;
      font-weight: 800;
      letter-spacing: -0.5px;
      margin-bottom: 12px;
    }
    .banner-desc {
      font-size: 14px;
      color: rgba(239, 246, 255, 0.9);
      line-height: 1.6;
      margin-bottom: 16px;
      font-weight: 300;
    }
    .status-badge {
      display: inline-block;
      padding: 12px;
      border-radius: 12px;
      background-color: rgba(255, 255, 255, 0.1);
      border: 1px solid rgba(255, 255, 255, 0.2);
      font-size: 12px;
      font-weight: 600;
    }
    .banner-features {
      margin-top: 32px;
      display: flex;
      flex-direction: column;
      gap: 16px;
    }
    .feature-item {
      display: flex;
      align-items: center;
      gap: 12px;
    }
    .feature-icon {
      font-size: 18px;
    }
    .feature-text {
      font-size: 13px;
      font-weight: 600;
    }
    .banner-footer {
      font-size: 10px;
      text-transform: uppercase;
      letter-spacing: 2px;
      color: #93c5fd;
      font-weight: 700;
      margin-top: 40px;
    }
    .form-wrapper {
      padding: 40px;
      background-color: rgba(15, 23, 42, 0.6);
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }
    .form-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 24px;
      border-bottom: 1px solid #1e293b;
      padding-bottom: 12px;
    }
    .form-title {
      font-size: 20px;
      font-weight: 700;
      color: #ffffff;
    }
    .switch-link {
      background: none;
      border: none;
      color: #3b82f6;
      font-size: 12px;
      font-weight: 700;
      cursor: pointer;
    }
    .switch-link:hover {
      text-decoration: underline;
    }
    .field-group {
      margin-bottom: 16px;
    }
    .input-label {
      display: block;
      font-size: 11px;
      font-weight: 600;
      color: #94a3b8;
      text-transform: uppercase;
      letter-spacing: 0.5px;
      margin-bottom: 6px;
    }
    .input-field {
      width: 100%;
      padding: 10px 14px;
      background-color: rgba(30, 41, 59, 0.6);
      border: 1px solid #334155;
      border-radius: 8px;
      color: #ffffff;
      font-size: 14px;
      outline: none;
      transition: all 0.2s;
    }
    .input-field:focus {
      border-color: #f59e0b; /* Amber focus ring */
      box-shadow: 0 0 0 2px rgba(245, 158, 11, 0.2);
    }
    .select-field {
      appearance: none;
      background-image: url("data:image/svg+xml;utf8,<svg fill='white' height='24' viewBox='0 0 24 24' width='24' xmlns='http://www.w3.org/2000/svg'><path d='M7 10l5 5 5-5z'/><path d='M0 0h24v24H0z' fill='none'/></svg>");
      background-repeat: no-repeat;
      background-position: right 10px center;
    }
    .select-field option {
      background-color: #0f172a;
    }
    .grid-2 {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 12px;
    }
    .label-row {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 6px;
    }
    .forgot-link {
      background: none;
      border: none;
      color: #3b82f6;
      font-size: 12px;
      font-weight: 700;
      cursor: pointer;
    }
    .forgot-link:hover {
      text-decoration: underline;
    }
    .submit-btn {
      width: 100%;
      background-color: #2563eb;
      color: #ffffff;
      font-weight: 700;
      padding: 12px;
      border-radius: 8px;
      border: none;
      cursor: pointer;
      font-size: 14px;
      transition: all 0.2s;
      box-shadow: 0 4px 12px rgba(37, 99, 235, 0.2);
    }
    .submit-btn:hover:not(:disabled) {
      background-color: #1d4ed8;
      box-shadow: 0 6px 16px rgba(37, 99, 235, 0.4);
    }
    .submit-btn:disabled {
      opacity: 0.6;
      cursor: not-allowed;
    }
    .form-desc {
      font-size: 12px;
      color: #94a3b8;
      line-height: 1.5;
    }
    .success-banner {
      color: #10b981;
      background-color: rgba(16, 185, 129, 0.05);
      border: 1px solid rgba(16, 185, 129, 0.2);
      padding: 10px;
      border-radius: 8px;
    }
    .back-link {
      width: 100%;
      background: none;
      border: none;
      color: #94a3b8;
      text-align: center;
      font-size: 12px;
      font-weight: 600;
      cursor: pointer;
      text-decoration: underline;
      display: block;
      margin-top: 16px;
    }
    .back-link:hover {
      color: #ffffff;
    }
    .shortcuts-section {
      margin-top: 32px;
      padding-top: 24px;
      border-top: 1px solid #1e293b;
    }
    .shortcuts-title {
      font-size: 10px;
      font-weight: 750;
      color: #64748b;
      letter-spacing: 1px;
      display: block;
      margin-bottom: 12px;
      text-align: center;
    }
    .shortcuts-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 8px;
    }
    .shortcut-btn {
      background-color: #1e293b;
      border: 1px solid #334155;
      border-radius: 8px;
      color: #94a3b8;
      font-size: 10px;
      font-weight: 700;
      padding: 8px 4px;
      cursor: pointer;
      transition: all 0.2s;
    }
    .shortcut-btn:hover {
      background-color: rgba(37, 99, 235, 0.1);
      border-color: #2563eb;
      color: #ffffff;
    }
    .method-selector-container {
      display: flex;
      flex-direction: column;
      gap: 12px;
      margin-bottom: 16px;
    }
    .method-btn {
      width: 100%;
      background-color: #1e293b;
      border: 1px solid #334155;
      border-radius: 12px;
      color: #ffffff;
      padding: 16px;
      cursor: pointer;
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
      transition: all 0.25s ease;
    }
    .method-btn:hover {
      background-color: rgba(37, 99, 235, 0.1);
      border-color: #2563eb;
      transform: translateY(-2px);
    }
    .method-icon {
      font-size: 24px;
      margin-bottom: 8px;
    }
    .method-title {
      font-size: 14px;
      font-weight: 700;
      display: block;
      margin-bottom: 4px;
    }
    .method-desc {
      font-size: 11px;
      color: #94a3b8;
      font-weight: 450;
    }
    .toast-message {
      position: fixed;
      top: 16px;
      right: 16px;
      z-index: 9999;
      padding: 12px 20px;
      border-radius: 8px;
      color: #ffffff;
      font-size: 13px;
      font-weight: 600;
      box-shadow: 0 10px 25px rgba(0, 0, 0, 0.4);
      border: 1px solid transparent;
      animation: slideIn 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    }
    @keyframes slideIn {
      from { transform: translateX(100%); opacity: 0; }
      to { transform: translateX(0); opacity: 1; }
    }
    .toast-message.error {
      background-color: #dc2626;
      border-color: #ef4444;
    }
    .toast-message.success {
      background-color: #059669;
      border-color: #10b981;
    }
  `]
})
export class LoginComponent {
  loginForm: FormGroup;
  registerForm: FormGroup;
  forgotForm: FormGroup;
  resetForm: FormGroup;
  loading = false;
  toastMsg = '';
  toastType = '';

  isForgot = false;
  isRegister = false;
  forgotStep = 1;
  registerStep = 1;
  registerOtp = '';
  forgotMethod: 'email' | 'mobile' | null = null;

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });

    this.registerForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      mobile: ['', Validators.required],
      role: ['Project Manager', Validators.required],
      department: [''],
      securityCode: ['', Validators.required],
      password: ['', Validators.required]
    });

    this.forgotForm = this.fb.group({
      mobile: ['', Validators.required]
    });

    this.resetForm = this.fb.group({
      otp: ['', Validators.required],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required]
    });
  }

  showToast(message: string, type: 'success' | 'error' = 'success') {
    this.toastMsg = message;
    this.toastType = type;
    setTimeout(() => {
      if (this.toastMsg === message) {
        this.toastMsg = '';
        this.toastType = '';
      }
    }, 4000);
  }

  toggleForgot(val: boolean) {
    this.isForgot = val;
    this.forgotStep = 1;
    this.forgotMethod = null;
    this.toastMsg = '';
    this.forgotForm.reset();
    this.resetForm.reset();
  }

  setForgotMethod(method: 'email' | 'mobile') {
    this.forgotMethod = method;
    this.forgotForm.reset();
  }

  toggleRegister() {
    this.isRegister = !this.isRegister;
    this.registerStep = 1;
    this.registerOtp = '';
    this.toastMsg = '';
    this.registerForm.reset({ role: 'Project Manager' });
  }

  onSubmit() {
    const email = this.loginForm.value.email;
    const password = this.loginForm.value.password;

    if (!email || !password) {
      this.showToast('Please provide email and password.', 'error');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      this.showToast('Invalid email format.', 'error');
      return;
    }

    if (password.length < 6) {
      this.showToast('Password must be at least 6 characters long.', 'error');
      return;
    }

    this.loading = true;
    this.authService.login({ email, password }).subscribe({
      next: () => {
        this.loading = false;
        this.router.navigate(['/dashboard']);
      },
      error: (err: any) => {
        this.loading = false;
        this.showToast(err?.error?.msg || err?.error?.message || 'Authentication failed: Invalid credentials.', 'error');
      }
    });
  }

  onRegisterSubmit() {
    const { name, email, mobile, role, department, securityCode, password } = this.registerForm.value;

    if (!name || !email || !mobile || !securityCode || !password) {
      this.showToast('Please complete all form fields.', 'error');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      this.showToast('Invalid email format.', 'error');
      return;
    }

    const indianMobileRegex = /^(?:\+91|0)?[6-9]\d{9}$/;
    if (!indianMobileRegex.test(mobile)) {
      this.showToast('Please enter a valid 10-digit Indian mobile number (e.g., 9876543210).', 'error');
      return;
    }

    if (securityCode !== '002') {
      this.showToast('Invalid authorization code.', 'error');
      return;
    }

    if (password.length < 6) {
      this.showToast('Password must be at least 6 characters long.', 'error');
      return;
    }

    this.loading = true;
    this.authService.register({
      name,
      email,
      mobile,
      role,
      department,
      securityCode,
      password
    }).subscribe({
      next: () => {
        this.loading = false;
        this.isRegister = false;
        this.registerStep = 1;
        this.registerForm.reset({ role: 'Project Manager' });
        this.showToast('Account onboarding finished: Welcome! Please log in.', 'success');
      },
      error: (err: any) => {
        this.loading = false;
        this.showToast(err?.error?.msg || err?.error?.message || 'Registration failed.', 'error');
      }
    });
  }

  loginShortcut(email: string) {
    this.loading = true;
    this.authService.login({ email, password: 'password123' }).subscribe({
      next: () => {
        this.loading = false;
        this.router.navigate(['/dashboard']);
      },
      error: (err: any) => {
        this.loading = false;
        this.showToast(err?.error?.msg || err?.error?.message || 'Shortcut login failed.', 'error');
      }
    });
  }

  requestOtp() {
    const input = this.forgotForm.value.mobile?.trim();
    if (!input) {
      this.showToast(`Please provide your registered ${this.forgotMethod === 'email' ? 'email address' : 'mobile number'}.`, 'error');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const indianMobileRegex = /^(?:\+91|0)?[6-9]\d{9}$/;

    let data: { email?: string; mobile?: string } = {};
    if (this.forgotMethod === 'email') {
      if (!emailRegex.test(input)) {
        this.showToast('Please enter a valid email address.', 'error');
        return;
      }
      data.email = input;
    } else {
      if (!indianMobileRegex.test(input)) {
        this.showToast('Please enter a valid 10-digit Indian mobile number.', 'error');
        return;
      }
      data.mobile = input;
    }

    this.loading = true;
    this.authService.forgotPassword(data).subscribe({
      next: (res: any) => {
        this.loading = false;
        this.forgotStep = 2;
        if (res.otp) {
          this.showToast(`Verification code generated: ${res.otp}`, 'success');
        } else {
          this.showToast(res.msg || 'Verification code sent successfully!', 'success');
        }
      },
      error: (err: any) => {
        this.loading = false;
        this.showToast(err?.error?.msg || err?.error?.message || 'Failed to send OTP.', 'error');
      }
    });
  }

  resetPassword() {
    const { otp, password, confirmPassword } = this.resetForm.value;
    if (!otp || !password || !confirmPassword) {
      this.showToast('Please fill in all fields.', 'error');
      return;
    }

    if (password.length < 6) {
      this.showToast('New password must be at least 6 characters long.', 'error');
      return;
    }

    if (password !== confirmPassword) {
      this.showToast('Passwords do not match.', 'error');
      return;
    }

    const input = this.forgotForm.value.mobile?.trim();
    let data: any = { otp, password };
    if (this.forgotMethod === 'email') {
      data.email = input;
    } else {
      data.mobile = input;
    }

    this.loading = true;
    this.authService.resetPassword(data).subscribe({
      next: () => {
        this.loading = false;
        this.toggleForgot(false);
        this.showToast('Password reset successfully. Please log in with your new password.', 'success');
      },
      error: (err: any) => {
        this.loading = false;
        this.showToast(err?.error?.msg || err?.error?.message || 'Failed to reset password.', 'error');
      }
    });
  }
}
