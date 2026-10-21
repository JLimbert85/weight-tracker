import { HttpClient, HttpResponse } from '@angular/common/http';
import { inject, Service, signal } from '@angular/core';
import { BROWSER_STORAGE } from '../storage';
import { AuthResponse } from '../interfaces/auth-response';
import { User } from '../interfaces/user';
import { Observable } from 'rxjs';

@Service()
export class AuthenticationService {
  private storage = inject(BROWSER_STORAGE);
  private http = inject(HttpClient);
  private baseUrl: string = 'http://localhost:3000/api';
  isLoggedIn = signal(this.checkLoggedIn());

  authResp: AuthResponse = new AuthResponse();

  public getToken(): string {
    let out: any;
    out = this.storage.getItem('wt-token');

    if (!out) {
      return '';
    }
    return out;
  }

  public saveToken(token: string): void {
    this.storage.setItem('wt-token', token);
  }

  public logout(): void {
    this.storage.removeItem('wt-token');
    this.isLoggedIn.set(false);
  }

  private checkLoggedIn(): boolean {
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

  public login(user: User, passwd: string): Observable<HttpResponse<AuthResponse>> {
    return this.handleAuthAPICall('login', user, passwd);
  }

  public register(user: User, passwd: string): Observable<HttpResponse<AuthResponse>> {
    return this.handleAuthAPICall('register', user, passwd);
  }

  private handleAuthAPICall(
    endpoint: string,
    user: User,
    passwd: string,
  ): Observable<HttpResponse<AuthResponse>> {
    let formData = {
      email: user.email,
      password: passwd,
      goalWeight: user.goalWeight,
      heightInInches: user.heightInInches,
    };
    return this.http.post<AuthResponse>(`${this.baseUrl}/${endpoint}`, formData, {
      observe: 'response',
    });
  }
}
