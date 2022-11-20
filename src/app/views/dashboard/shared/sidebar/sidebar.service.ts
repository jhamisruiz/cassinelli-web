import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  constructor(
    private http: HttpClient
  ) { }

  MenuSidebar(): Observable<any> {
    return this.http.get<any>(`/config-sidebar`);
  }

  getMenuSidebar(): any {
    const menu: any = [
      {
        nombre: 'Dashboard',
        url: 'dashboard',
        icon: 'fas fa-tachometer-alt',
        submenu: null
      },
      {
        nombre: 'Administracion',
        url: 'administracion',
        icon: 'fas fa-briefcase',
        submenu: [
          {
            nombre: 'Administracion',
            url: 'administracion',
            icon: 'fas fa-chalkboard-teacher',
          },
          {
            nombre: 'Permisos',
            url: 'permisos',
            icon: 'fas fa-users-cog',
          }
        ]
      },
      {
        nombre: 'Usuarios',
        url: 'usuarios',
        icon: 'fas fa-user',
      },
      {
        nombre: 'Doctores',
        url: 'doctores',
        icon: 'fas fa-user-md',
        submenu: null
      },
      {
        nombre: 'Historias',
        url: 'historias',
        icon: 'fas fa-address-book',
        submenu: null
      },
      {
        nombre: 'Pacientes',
        url: 'pacientes',
        icon: 'fas fa-address-book',
        submenu: null
      },
      {
        nombre: 'Configuracion',
        url: 'configuracion',
        icon: 'fas fa-cogs',
      },
    ];

    return menu;
  }
}
