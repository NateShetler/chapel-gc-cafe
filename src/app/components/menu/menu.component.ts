import { stringify } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { MenuItem } from './models/MenuItem'

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})

export class MenuComponent implements OnInit {

  // For all of the menu items
  menuItems:MenuItem[];

  constructor() { }

  ngOnInit(): void {

    // Create the list of menu items (this method of storing the item list will soon be replaced with strapi)
    this.menuItems = [
      {
        item: "Breakfast Sandwhich",
        price: 1,
        flavors: ["Sausage, Egg, & Cheese", "Bacon, Egg, & Cheese "]
      },
      {
        item: "Cookie",
        price: 1,
        flavors: ["Breakfast Cookie", "Double Chocolate", "M&M", "Chocolate Chip", "Reese's Cup", "Sugar", "Oatmeal"]
      },
      {
        item: "Breakfast Burrito",
        price: 1,
        flavors: ["Egg & Cheese"]
      },
      {
        item: "Scone",
        price: 1,
        flavors: ["Blueberry", "Cranberry"]
      },
      {
        item: "Omelet",
        price: 1,
        flavors: ["Egg, Potato, & Cheese"]
      },
      {
        item: "Muffin",
        price: 1,
        flavors: ["Double Chocolate Chip", "Apple Pecan", "Lemon Cranberry", "Blueberry"]
      },
      {
        item: "Cheesebox",
        price: 2,
        flavors: ["Cheese Cubes, Grapes, & Crackers"]
      },
      {
        item: "Donut",
        price: 1,
        flavors: ["Glazed", "Cream Stick"]
      }
    ]
  }

}
