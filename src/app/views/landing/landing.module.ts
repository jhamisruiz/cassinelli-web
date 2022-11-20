import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { BlogComponent } from './blog/blog.component';
import { EmpresaComponent } from './empresa/empresa.component';
import { HeaderComponent } from './header/header.component';



@NgModule({
  declarations: [
    HomeComponent,
    BlogComponent,
    EmpresaComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule
  ]
})
export class LandingModule { }
