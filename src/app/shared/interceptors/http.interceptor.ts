import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable()
export class HttpConfig implements HttpInterceptor {

  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let url = req.url;
    if (!(/^http.?:\/\//.test(url)) && !url.startsWith('.')) {
      // Normalize URL
      const remoteUrl = environment.apiHost;
      const endpoint = url.split(/\/+/).filter(f => String(f ?? '').trim().length > 0);
      const protocol = `http${environment.apiSSL ? 's' : ''}`;
      const version = environment.apiVersion;

      url = `${protocol}://${[remoteUrl, version, ...endpoint].join('/')}`;
    }


    // Obtener el token de usuario.
    const httpMethod = req.method;
    const authToken = 'this.user.userToken' ?? '';//FIXME:
    const cloneParams = req.params;
    const customHeaders: Record<string, string | string[]> = {};

    {
      authToken.length > 0 && (customHeaders['Authorization'] = `Bearer ${authToken}`);

      // COMPONENT_ID_HEADER

      // if ('GET' !== httpMethod && isTransaction) {
      //   customHeaders[TRANSACTION_HEADER] = [...[cloneParams.get('transationId')]].join('');
      //   cloneParams.delete('transactionId');
      // }
    }

    const httpReq = req.clone({
      url,
      //setHeaders: customHeaders,
      params: cloneParams
    });

    return next
      .handle(httpReq)
      .pipe(
        map(event => {
          if (event instanceof HttpResponse) {
            if (undefined !== event.body?.error) {
              throw event.body;
            }
            //this.showHttpNotifications(event.body, event.status, httpMethod);
            //console.log('event.body', event.body);/FIXME: mensajes
          }
          return event;
        }),
        catchError(err => {

          const customError: Record<string, any> = {
            ...err
          };
          if (err instanceof HttpErrorResponse) {
            const errorMessage = 'string' === typeof err.error ? err.error : (!window.navigator.onLine ? 'ERR_INTERNET_DISCONNECTED' : err.statusText);
            customError['code'] = err.status;
            customError['message'] = `#(${err.status}) ${errorMessage}`;
          }
          //console.log('customError', customError);/FIXME: mensajes
          return throwError(customError);
        })
      );
  }
}
