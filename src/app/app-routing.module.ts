import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ModulosRoutingModule } from './views/dashboard/modulos/modulos-routing.module';
import { AuthRoutingModule } from './views/dashboard/auth/auth-routing.module';
import { LandingRoutingModule } from './views/landing/landing-routing.module';
import { ErrorPageComponent } from './error-page/error-page.component';
import { AuthGuard } from './shared/guards/auth.guard';
import { LoginComponent } from './views/dashboard/auth/login/login.component';
import { ModulosModule } from './views/dashboard/modulos/modulos.module';
import { UserGuard } from './shared/guards/user.guard';
import { ModulosComponent } from './views/dashboard/modulos/modulos.component';
import { HomeComponent } from './views/landing/home/home.component';
import { PerfilComponent } from './views/dashboard/modulos/perfil/perfil.component';
import { DashboardComponent } from './views/dashboard/modulos/dashboard/dashboard.component';
import { AdministracionComponent } from './views/dashboard/modulos/administracion/administracion.component';
import { UsuariosComponent } from './views/dashboard/modulos/usuarios/usuarios.component';
import { ProveedoresComponent } from './views/dashboard/modulos/proveedores/proveedores.component';
import { ConfiguracionesComponent } from './views/dashboard/modulos/configuraciones/configuraciones.component';

const routes: Routes = [
  {
    path: 'login',
    canActivate: [AuthGuard],
    component: LoginComponent,
  },
  // {
  //   path: 'admin-panel',
  //   loadChildren: (): Promise<ModulosModule> =>
  //     import('./views/dashboard/modulos/modulos.module')
  //       .then(m => m.ModulosModule),
  // },
  {
    path: '',
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
        children: [
          {
            path: 'proveedores',
            component: ProveedoresComponent,
          },
          {
            path: 'usuarios',
            component: UsuariosComponent,
          },
          {
            path: 'configuracion',
            component: ConfiguracionesComponent,
          }
        ]
      },
      {
        path: 'usuarios',
        component: ErrorPageComponent
      },
      {
        path: '**',
        component: ErrorPageComponent
      },
    ]
  },
  {
    path: '**',
    component: ErrorPageComponent,
  }
];


@NgModule({
  imports: [
    // ModulosRoutingModule,
    // AuthRoutingModule,
    //LandingRoutingModule,
    RouterModule.forRoot(
      routes,
      {
        useHash: false,
        onSameUrlNavigation: 'reload',
      }),
    RouterModule,
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
