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
  ],
  selector: 'app-login',
  styleUrl: './login.css',
  templateUrl: './login.html',
})
export class Login {
  authService = inject(AuthenticationService);
  router = inject(Router);
  public formError = signal('');
  credentials = {
    email: '',
    password: '',
  };
  showSpinner = signal(false);

  // Handle the login form submission
  // Validate the form fields and trigger the login process if valid
  public onLoginSubmit(): void {
    this.formError.set('');
    this.showSpinner.set(true);
    if (!this.credentials.email || !this.credentials.password) {
      this.formError.set('All fields are required, please try again');
      this.showSpinner.set(false);
    } else {
      this.doLogin();
    }
  }

  // Perform the actual login request to the authentication service
  // Handle the response and update the UI accordingly
  private doLogin(): void {
    let newUser = {
      email: this.credentials.email,
    } as User;

    this.authService.login(newUser, this.credentials.password).subscribe({
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
