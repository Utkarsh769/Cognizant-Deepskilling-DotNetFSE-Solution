import { HttpInterceptorFn } from '@angular/common/http';

import { catchError } from 'rxjs/operators';

import { throwError } from 'rxjs';

export const errorInterceptor: HttpInterceptorFn = (req, next) => {

  return next(req).pipe(

    catchError(error => {

      console.error('Global HTTP Error:', error);

      alert('HTTP Request Failed');

      return throwError(() => error);

    })

  );

};