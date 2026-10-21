import { Component, inject, signal } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinner } from '@angular/material/progress-spinner';
import { User } from '../../interfaces/user';
import { AuthenticationService } from '../../services/authentication-service';
import { Router, RouterLink } from '@angular/router';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { AuthResponse } from '../../interfaces/auth-response';
import { HeightInputComponent } from '../height-input/height-input';

@Component({
  imports: [
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    RouterLink,
    MatProgressSpinner,
    HeightInputComponent,
  ],
  selector: 'app-register',
  styleUrl: './register.css',
  templateUrl: './register.html',
})
export class Register {
  authService = inject(AuthenticationService);
  router = inject(Router);
  public formError = signal('');
  credentials = {
    email: '',
    password: '',
    confirmPassword: '',
    goalWeight: 0,
    heightInInches: 0,
  };
  height = signal({ feet: 0, inches: 0 });
  showSpinner = signal(false);

  public onRegisterSubmit(): void {
    this.formError.set('');
    this.showSpinner.set(true);
    if (
      !this.credentials.email ||
      !this.credentials.password ||
      !this.credentials.confirmPassword ||
      !this.credentials.goalWeight ||
      !this.height().feet ||
      !this.height().inches
    ) {
      this.formError.set('All fields are required, please try again');
      this.showSpinner.set(false);
    } else if (this.credentials.password !== this.credentials.confirmPassword) {
      this.formError.set('Passwords do not match');
      this.showSpinner.set(false);
    } else {
      this.doRegister();
    }
  }

  private doRegister(): void {
    const { feet, inches } = this.height();
    const heightInInches = feet * 12 + inches;
    let newUser = {
      email: this.credentials.email,
      goalWeight: this.credentials.goalWeight,
      heightInInches: heightInInches,
    } as User;

    this.authService.register(newUser, this.credentials.password).subscribe({
      next: (response: HttpResponse<AuthResponse>) => {
        if (response.body) {
          this.authService.saveToken(response.body.token);
          this.authService.isLoggedIn.set(true);
          this.router.navigateByUrl('/');
        }
      },
      error: (error: HttpErrorResponse) => {
        if ((error.status === 400 || error.status === 401) && error.error?.message) {
          console.error('Error: ' + error.error.message);
          this.formError.set(error.error.message);
          this.showSpinner.set(false);
        } else {
          console.error('An unexpected error occurred. Please try again later.');
          this.formError.set('An unexpected error occurred. Please try again later.');
          this.showSpinner.set(false);
        }
      },
    });
  }
}
