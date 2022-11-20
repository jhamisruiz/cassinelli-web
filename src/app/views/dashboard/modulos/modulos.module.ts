import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdministracionComponent } from './administracion/administracion.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { ModulosComponent } from './modulos.component';
import { PerfilComponent } from './perfil/perfil.component';
import { LibrariesModule } from 'src/app/libraries/libraries.module';
import { HomeComponent } from './home/home.component';
import { ModulosRoutingModule } from './modulos-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProveedoresComponent } from './proveedores/proveedores.component';
import { ConfiguracionesComponent } from './configuraciones/configuraciones.component';
import { OrdenCompraComponent } from './orden-compra/orden-compra.component';



@NgModule({
  declarations: [
    AdministracionComponent,
    DashboardComponent,
    UsuariosComponent,
    ModulosComponent,
    PerfilComponent,
    HomeComponent,
    ProveedoresComponent,
    ConfiguracionesComponent,
    OrdenCompraComponent
  ],
  imports: [
    CommonModule,
    ModulosRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule,
    SharedModule,
    LibrariesModule,
  ],
  exports: [
    AdministracionComponent,
    DashboardComponent,
    UsuariosComponent,
    PerfilComponent,
    HomeComponent,
    ProveedoresComponent,
    ConfiguracionesComponent,
    OrdenCompraComponent
  ],
})
export class ModulosModule { }
