import { Component, inject } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { User } from '../../interfaces/user';
import { AuthenticationService } from '../../services/authentication-service';
import { Router } from '@angular/router';

@Component({
  imports: [
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  selector: 'app-login',
  styleUrl: './login.css',
  templateUrl: './login.html',
})
export class Login {
  authService = inject(AuthenticationService);
  router = inject(Router);
  public formError: string = '';
  credentials = {
    email: '',
    password: '',
  };

  public onLoginSubmit(): void {
    this.formError = '';
    if (!this.credentials.email || !this.credentials.password) {
      this.formError = 'All fields are required, please try again';
    } else {
      this.doLogin();
    }
  }

  private doLogin(): void {
    let newUser = {
      email: this.credentials.email,
    } as User;

    this.authService.login(newUser, this.credentials.password);

    if (this.authService.isLoggedIn()) {
      this.router.navigateByUrl('/');
    } else {
      this.formError = 'Invalid credentials';
    }
  }
}
