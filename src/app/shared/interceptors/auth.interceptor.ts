import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { finalize, tap } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { DOCUMENT } from '@angular/common';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  return next(req);
};

export const jwtInterceptor: HttpInterceptorFn = (req, next) => {
  const localStorage = inject(DOCUMENT).defaultView?.localStorage;
  let clonedRequest = req;
  if (localStorage) {
    const token = localStorage.getItem('token');
    if (token) {
      clonedRequest = req.clone({
        headers: req.headers.set('Authorization', `Bearer ${token}`),
      });
    }
  }
  return next(clonedRequest);
};

export const loadingScreenInterceptor: HttpInterceptorFn = (req, next) => {
  const authService = inject(AuthService);
  return next(req).pipe(
    tap(() => {
      //show loading screen
      authService.loading.set(true);
    }),
    finalize(() => {
      //hide loading screen
      authService.loading.set(false);
    })
  );
};
