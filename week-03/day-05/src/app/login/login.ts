import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Userservice } from '../service/userservice';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.html',
  styleUrls: ['./login.css']
})
export class Login {
  loginForm: FormGroup;
  loginError: string = '';

  constructor(
    private fb: FormBuilder,
    private userservice: Userservice,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      const { email, password } = this.loginForm.value;
      this.userservice.login(email, password).subscribe(users => {
        if (users.length > 0) {
          this.userservice.setLoggedInUser(users[0]);
          this.router.navigate(['/']); // بعد تسجيل الدخول يرجع للصفحة الرئيسية
        } else {
          this.loginError = 'Invalid email or password';
        }
      });
    } else {
      this.loginForm.markAllAsTouched();
    }
  }
}
