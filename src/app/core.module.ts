import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewsModule } from './views/views.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './shared/interceptors/auth.interceptor';
import { HttpConfig } from './shared/interceptors/http.interceptor';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ViewsModule,
    HttpClientModule
  ],
  exports: [
    ViewsModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpConfig,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
})
export class CoreModule { }
