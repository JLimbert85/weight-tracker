import { HttpEvent, HttpHandlerFn, HttpInterceptorFn, HttpRequest } from '@angular/common/http';
import { inject } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../services/authentication-service';

export const jwtInterceptor: HttpInterceptorFn = (
  req: HttpRequest<any>,
  next: HttpHandlerFn,
): Observable<HttpEvent<any>> => {
  const authenticationService = inject(AuthenticationService);

  // If the user is logged in, attach the JWT token to the request headers.
  if (authenticationService.isLoggedIn()) {
    let token = authenticationService.getToken();
    const authReq = req.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`,
      },
    });
    return next(authReq);
  }
  // If the user is not logged in, pass the request through without adding the JWT token.
  return next(req);
};
