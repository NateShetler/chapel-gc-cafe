import { Component, OnInit, Input } from '@angular/core';
import { MenuItem } from '../models/MenuItem';

@Component({
  selector: 'app-menu-items',
  templateUrl: './menu-items.component.html',
  styleUrls: ['./menu-items.component.css']
})
export class MenuItemsComponent implements OnInit {
  @Input() menuItem: MenuItem;
  
  constructor() { }

  ngOnInit(): void {
  }

}
