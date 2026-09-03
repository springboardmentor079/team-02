import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-register',
  template: `
    <div class="auth-wrapper">
      <div class="auth-card glass-card">
        <div class="auth-header">
          <div class="auth-logo">🏗</div>
          <h1 class="gradient-text">Create Account</h1>
          <p>Join BuildTrack today</p>
        </div>

        <form [formGroup]="registerForm" (ngSubmit)="onSubmit()">
          <div class="field-group">
            <label>Full Name</label>
            <input type="text" formControlName="name" placeholder="John Doe" class="input-field">
          </div>
          
          <div class="field-group">
            <label>Email Address</label>
            <input type="email" formControlName="email" placeholder="you@company.com" class="input-field">
          </div>

          <div class="field-group">
            <label>Mobile Number</label>
            <input type="text" formControlName="mobile" placeholder="9876543210" class="input-field">
          </div>

          <div class="grid-2">
            <div class="field-group">
              <label>Clearance Role</label>
              <select formControlName="role" class="input-field">
                <option value="">Select a role</option>
                <option value="Worker">Worker</option>
                <option value="Client">Client</option>
                <option value="Contractor">Contractor</option>
                <option value="Site Engineer">Site Engineer</option>
                <option value="Project Manager">Project Manager</option>
                <option value="Administrator">Administrator</option>
              </select>
            </div>
            <div class="field-group">
              <label>Department</label>
              <input type="text" formControlName="department" placeholder="e.g. Planning Dept" class="input-field">
            </div>
          </div>

          <div class="field-group">
            <label>Authorization Code</label>
            <input type="password" formControlName="securityCode" placeholder="Enter registration code (e.g., 002)" class="input-field">
          </div>

          <div class="field-group">
            <label>Password</label>
            <input type="password" formControlName="password" placeholder="Min 6 characters" class="input-field">
          </div>

          <div class="error-msg" *ngIf="errorMsg">{{ errorMsg }}</div>
          <div class="success-msg" *ngIf="successMsg">{{ successMsg }}</div>

          <button type="submit" class="btn btn-primary submit-btn" [disabled]="registerForm.invalid || loading">
            <span *ngIf="!loading">Complete Onboarding</span>
            <span *ngIf="loading">Creating account...</span>
          </button>
        </form>

        <p class="auth-footer">
          Already have an account? <a routerLink="/login">Sign In</a>
        </p>
      </div>
    </div>
  `,
  styles: [`
    .auth-wrapper {
      min-height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      background: radial-gradient(ellipse at 60% 50%, rgba(108,99,255,0.15) 0%, transparent 60%),
                  radial-gradient(ellipse at 10% 80%, rgba(0,191,165,0.1) 0%, transparent 50%),
                  url('https://res.cloudinary.com/b6pdv15b/image/upload/v1788370295/ChatGPT_Image_Sep_2_2026_11_00_06_PM_x3c5xe.png') center/cover no-repeat,
                  #0f1117;
    }
    .auth-card { width: 100%; max-width: 440px; padding: 40px; }
    .auth-header { text-align: center; margin-bottom: 28px; }
    .auth-logo { font-size: 48px; margin-bottom: 12px; }
    .auth-header h1 { font-size: 32px; font-weight: 800; }
    .auth-header p { color: #a0a3b1; margin-top: 6px; }
    .field-group { margin-bottom: 16px; }
    .field-group label { display: block; font-size: 13px; font-weight: 600; color: #a0a3b1; margin-bottom: 8px; }
    .input-field {
      width: 100%; padding: 12px 14px;
      background: rgba(255,255,255,0.05);
      border: 1px solid rgba(255,255,255,0.1);
      border-radius: 10px;
      color: #fff; font-size: 14px;
      font-family: 'Inter', sans-serif;
      transition: all 0.2s; outline: none;
    }
    .input-field option { background: #1a1d2e; }
    .input-field:focus { border-color: #6C63FF; box-shadow: 0 0 0 3px rgba(108,99,255,0.2); }
    .input-field::placeholder { color: #6b6f82; }
    .grid-2 { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; }
    .error-msg { color: #FF6B6B; font-size: 13px; margin-bottom: 16px; padding: 10px 14px; background: rgba(255,107,107,0.1); border-radius: 8px; }
    .success-msg { color: #00BFA5; font-size: 13px; margin-bottom: 16px; padding: 10px 14px; background: rgba(0,191,165,0.1); border-radius: 8px; }
    .submit-btn { width: 100%; justify-content: center; padding: 14px; font-size: 15px; margin-top: 8px; }
    .submit-btn:disabled { opacity: 0.6; cursor: not-allowed; }
    .auth-footer { text-align: center; margin-top: 24px; color: #a0a3b1; font-size: 14px; }
  `]
})
export class RegisterComponent {
  registerForm: FormGroup;
  loading = false;
  errorMsg = '';
  successMsg = '';

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) {
    this.registerForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      mobile: ['', [Validators.required, Validators.pattern(/^(?:\+91|0)?[6-9]\d{9}$/)]],
      role: ['', Validators.required],
      department: [''],
      securityCode: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  onSubmit() {
    if (this.registerForm.invalid) return;
    this.loading = true;
    this.errorMsg = '';
    this.successMsg = '';

    this.authService.register(this.registerForm.value).subscribe({
      next: () => {
        this.loading = false;
        this.router.navigate(['/dashboard']);
      },
      error: (err: any) => {
        this.loading = false;
        this.errorMsg = err?.error?.msg || err?.error?.message || 'Registration failed. Please check authorization code.';
      }
    });
  }
}
