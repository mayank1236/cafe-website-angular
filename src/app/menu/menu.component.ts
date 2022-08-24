import { Component, OnDestroy, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

import { Subscription } from 'rxjs';

import { MenuService } from './menu.service';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit, OnDestroy {
  menu: any;
  sub: Subscription;
  special;

  constructor(
    private menuService: MenuService,
    private meta: Meta,
    private title: Title
  ){

    this.meta.addTags([
      {name: 'description', content: 'Menu of food items served at adi\'s cafe & dine'},
      {name: 'keywords', content: ''}
    ]);
   }

  ngOnInit(): void {
    this.title.setTitle('Adi\'s Menu');
    this.sub = this.menuService.getMenu().subscribe((data) => {
      this.menu = data;

      this.special = {

      }
    });
  }



  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

}
