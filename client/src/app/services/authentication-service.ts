import { HttpClient } from '@angular/common/http';
import { inject, Service } from '@angular/core';
import { Router } from '@angular/router';
import { BROWSER_STORAGE } from '../storage';
import { WeightService } from './weight-service';
import { AuthResponse } from '../interfaces/auth-response';
import { User } from '../interfaces/user';

@Service()
export class AuthenticationService {
  private storage = inject(BROWSER_STORAGE);
  private weightService = inject(WeightService);

  authResp: AuthResponse = new AuthResponse();

  public getToken(): string {
    let out: any;
    out = this.storage.getItem('token');

    if (!out) {
      return '';
    }
    return out;
  }

  public saveToken(token: string): void {
    this.storage.setItem('token', token);
  }

  public logout(): void {
    this.storage.removeItem('token');
  }

  public isLoggedIn(): boolean {
    const token: string = this.getToken();
    if (token) {
      const payload = JSON.parse(atob(token.split('.')[1]));
      return payload.exp > Date.now() / 1000;
    } else {
      return false;
    }
  }

  public getCurrentUserId(): string {
    const token: string = this.getToken();
    const { _id } = JSON.parse(atob(token.split('.')[1]));
    return _id;
  }

  public login(user: User, passwd: string): void {
    this.weightService.logIn(user, passwd).subscribe({
      next: (value: any) => {
        if (value) {
          this.authResp = value;
          this.saveToken(this.authResp.token);
        }
      },
      error: (error: any) => {
        console.log('Error: ' + error.message);
      },
    });
  }

  public register(user: User, passwd: string): void {
    this.weightService.register(user, passwd).subscribe({
      next: (value: any) => {
        if (value) {
          this.authResp = value;
          this.saveToken(this.authResp.token);
        }
      },
      error: (error: any) => {
        console.log('Error: ' + error.message);
      },
    });
  }
}
