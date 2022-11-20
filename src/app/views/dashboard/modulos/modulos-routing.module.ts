import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ModulosComponent } from './modulos.component';
import { AdministracionComponent } from './administracion/administracion.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { ErrorPageComponent } from 'src/app/error-page/error-page.component';
import { PerfilComponent } from './perfil/perfil.component';
import { HomeComponent } from './home/home.component';
import { UserGuard } from '../../../shared/guards/user.guard';

const routes: Routes = [
  {
    path: 'admin_panels',
    canActivate: [UserGuard],
    component: ModulosComponent,
    children: [
      {
        path: '',
        component: HomeComponent
      },
      {
        path: 'perfil',
        component: PerfilComponent,
      },
      {
        path: 'dashboard',
        component: DashboardComponent,
      },
      {
        path: 'administracion',
        component: AdministracionComponent,
        children: [
          {
            path: 'administracion',
            component: DashboardComponent,
          }
        ]
      },
      {
        path: 'usuarios',
        component: UsuariosComponent
      },
      {
        path: '**',
        component: ErrorPageComponent
      },
    ]
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})
export class ModulosRoutingModule { }
