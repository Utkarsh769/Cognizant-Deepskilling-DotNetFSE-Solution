import { HttpInterceptorFn } from '@angular/common/http';

export const authInterceptor: HttpInterceptorFn = (req, next) => {

  const modifiedRequest = req.clone({

    setHeaders: {

      Authorization: 'Bearer DemoToken123'

    }

  });

  console.log('Auth Interceptor');

  return next(modifiedRequest);

};