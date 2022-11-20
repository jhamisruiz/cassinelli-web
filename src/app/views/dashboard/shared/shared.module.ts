import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { RouterModule } from '@angular/router';
import { LibrariesModule } from 'src/app/libraries/libraries.module';

@NgModule({
  declarations: [
    HeaderComponent,
    SidebarComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    LibrariesModule,
  ],
  exports: [
    HeaderComponent,
    SidebarComponent,
  ],
})
export class SharedModule { }
