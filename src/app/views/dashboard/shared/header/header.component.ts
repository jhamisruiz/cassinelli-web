import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit { //

  constructor(private user: UserService,) { }

  ngOnInit(): void {
    //console.log('header...');
  }

  logout(): void {
    this.user.clearUserSession();
  }
}
