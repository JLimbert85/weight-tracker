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

  // Retrieves the current authentication token from storage
  // Returns an empty string if no token is found.
  public getToken(): string {
    let out: any;
    out = this.storage.getItem('wt-token');

    if (!out) {
      return '';
    }
    return out;
  }

  // Saves the authentication token to storage
  // This method stores the provided token in the browser storage under the key 'wt-token'.
  public saveToken(token: string): void {
    this.storage.setItem('wt-token', token);
  }

  // Logs out the user by removing the authentication token from storage and updating the login state.
  // This method ensures that the user is no longer considered logged in after the operation.
  public logout(): void {
    this.storage.removeItem('wt-token');
    this.isLoggedIn.set(false);
  }

  // Checks if the user is currently logged in by verifying the presence and validity of the authentication token.
  // Returns true if the user is logged in, false otherwise.
  private checkLoggedIn(): boolean {
    const token: string = this.getToken();
    if (token) {
      const payload = JSON.parse(atob(token.split('.')[1]));
      return payload.exp > Date.now() / 1000;
    } else {
      return false;
    }
  }

  // Retrieves the current user's ID from the authentication token
  // Returns the user's ID as a string.
  // Throws an error if no valid token is found.
  // This method assumes that the token is a valid JWT and that the payload contains a '_id' field representing the user's ID.
  public getCurrentUserId(): string {
    const token: string = this.getToken();
    const { _id } = JSON.parse(atob(token.split('.')[1]));
    return _id;
  }

  // Handles the login process by sending a login request to the authentication API and managing the response.
  // Returns an Observable containing the HTTP response with the authentication token.
  public login(user: User, passwd: string): Observable<HttpResponse<AuthResponse>> {
    return this.handleAuthAPICall('login', user, passwd);
  }

  // Handles the registration process by sending a registration request to the authentication API and managing the response.
  // Returns an Observable containing the HTTP response with the authentication token.
  public register(user: User, passwd: string): Observable<HttpResponse<AuthResponse>> {
    return this.handleAuthAPICall('register', user, passwd);
  }

  // Handles the actual API call to the authentication endpoint (login or register) and manages the response.
  // Returns an Observable containing the HTTP response with the authentication token.
  // Throws an error if the API call fails.
  // This method is used internally by both the login and register methods.
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
