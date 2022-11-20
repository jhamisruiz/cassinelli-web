import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingModule } from './landing/landing.module';
import { ModulosModule } from './dashboard/modulos/modulos.module';
import { AuthModule } from './dashboard/auth/auth.module';
import { LibrariesModule } from '../libraries/libraries.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AuthModule,
    ModulosModule,
    LandingModule,
    HttpClientModule
  ],
  exports: [
    AuthModule,
    ModulosModule,
    LandingModule,
  ],
})
export class ViewsModule { }
