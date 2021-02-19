import { stringify } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { MenuItem } from './models/MenuItem'
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  menuItems:MenuItem[];

  constructor() { }

  ngOnInit(): void {
    this.menuItems = [
      {
        itemName: "Breakfast Sandwhich",
        price: 1,
        flavors: ["Sausage, Egg, & Cheese", "Bacon, Egg, & Cheese "]
      },
      {
        itemName: "Cookie",
        price: 1,
        flavors: ["Breakfast Cookie", "Double Chocolate", "M&M", "Chocolate Chip", "Reese's Cup", "Sugar", "Oatmeal"]
      },
      {
        itemName: "Breakfast Burrito",
        price: 1,
        flavors: ["Egg & Cheese"]
      },
      {
        itemName: "Scone",
        price: 1,
        flavors: ["Blueberry", "Cranberry"]
      },
      {
        itemName: "Omelet",
        price: 1,
        flavors: ["Egg, Potato, & Cheese"]
      },
      {
        itemName: "Muffin",
        price: 1,
        flavors: ["Double Chocolate Chip", "Apple Pecan", "Lemon Cranberry", "Blueberry"]
      },
      {
        itemName: "Cheesebox",
        price: 1,
        flavors: ["Cheese Cubes, Grapes, & Crackers"]
      },
      {
        itemName: "Donut",
        price: 1,
        flavors: ["Glazed", "Cream Stick"]
      }
    ]
  }

}
