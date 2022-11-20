import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { LOGIN_API_PATH } from '../constantes/app.constantes';
import { includes } from 'lodash-es';
import { AppService } from '../services/app.service';
import { Router } from '@angular/router';
@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private app: AppService, private router: Router) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(tap((event: HttpEvent<any>) => {
      if (event instanceof HttpResponse) {
        if (event && includes(event.url, LOGIN_API_PATH) && event.body && !event.body.error) {
          const data = event.body;
          console.log('login success...');
          // Verificar si el login es válido.
          if (data && data.token) {
            this.app.user.createSession(data);

            // this.app.user.loadStoredProperties();

            // // Cargar configuración inicial del usuario.
            // this.app.loadInitialSettings();

            this.router.navigate(['/', '']);
          }
        }
      }
      return event;
    }));
  }
}
