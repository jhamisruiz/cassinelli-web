import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { UBIGEO_PATH, DEPARTAMENTO_PATH } from 'src/app/shared/constantes/app.constantes';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<any>(`${DEPARTAMENTO_PATH}/0000`).subscribe((res) => {
      console.log('departamento::', res);
    });
  }

}
