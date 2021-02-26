import { stringify } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { MenuService } from '../../services/menu/menu.service'
import { MenuItem } from './models/MenuItem';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})

export class MenuComponent implements OnInit {

  // For all of the menu items
  menuItems:MenuItem[];

  constructor(private menuService:MenuService) { }

  ngOnInit(): void {
    this.menuItems = this.menuService.getMenuItems();
    
  }

}
