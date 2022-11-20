import { Component, OnInit } from '@angular/core';
import { SidebarService } from './sidebar.service';
import { NavigationEnd, Router, RouterModule } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  menuSider: any[] = [];
  menuUrl = '';
  newURL = '';
  constructor(private sv: SidebarService, private router: Router) { }

  ngOnInit(): void {
    //this.menuSider = this.sv.getMenuSidebar();
    this.sv.MenuSidebar().subscribe((r) => {
      this.menuSider = r;
    });
    const url = this.router.url;
    const arr = url.split('/');
    console.log('arr', arr);
    this.menuUrl = arr[1];
    this.routerLink(arr[1], 0);
  }
  routerLink(murl: string, n: number): any {
    // if (this.menuUrl === undefined) {
    //   this.menuUrl = murl;
    // }
    //this.display = (n === 0) ? 'none' : 'block';
    this.newURL = murl;
    this.router.events
      .pipe(filter((e) => e instanceof NavigationEnd))
      .subscribe((e: any) => {
        const arr = e.url.split('/');
        if (arr[1] === murl) {
          this.menuUrl = murl;
        }
      });
    // this.router.events.subscribe((event: any) => {
    //   console.log('entro');
    //   if (event instanceof NavigationEnd) {
    //     const url = this.router.url;
    //     const arr = url.split('/');
    //     if (arr[2] === murl) {
    //       this.menuUrl = murl;
    //       console.log('this.menuUrl', this.menuUrl);
    //     }
    //   }
    // });
  }
}
