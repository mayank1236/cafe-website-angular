import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { MenuService } from '../menu.service';

@Component({
  selector: 'app-menu-nav',
  templateUrl: './menu-nav.component.html',
  styleUrls: ['./menu-nav.component.css']
})
export class MenuNavComponent implements OnInit, OnDestroy {
  menu: any;
  sub: Subscription;
  constructor(private menuService: MenuService) { }

  ngOnInit(): void {
    this.sub = this.menuService.getMenu().subscribe((data) => {
      this.menu = data;
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
