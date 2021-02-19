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
        flavors: ["Sausage, Egg, & Cheese", "Bacon, Egg, & Cheese "],
        isFood: true
      },
      {
        item: "Cookie",
        price: 1,
        flavors: ["Breakfast Cookie", "Double Chocolate", "M&M", "Chocolate Chip", "Reese's Cup", "Sugar", "Oatmeal"],
        isFood: true
      },
      {
        item: "Breakfast Burrito",
        price: 1,
        flavors: ["Egg & Cheese"],
        isFood: true
      },
      {
        item: "Scone",
        price: 1,
        flavors: ["Blueberry", "Cranberry"],
        isFood: true
      },
      {
        item: "Omelet",
        price: 1,
        flavors: ["Egg, Potato, & Cheese"],
        isFood: true
      },
      {
        item: "Muffin",
        price: 1,
        flavors: ["Double Chocolate Chip", "Apple Pecan", "Lemon Cranberry", "Blueberry"],
        isFood: true
      },
      {
        item: "Cheesebox",
        price: 2,
        flavors: ["Cheese Cubes, Grapes, & Crackers"],
        isFood: true
      },
      {
        item: "Donut",
        price: 1,
        flavors: ["Glazed", "Cream Stick"],
        isFood: true
      }
    ]
  }

}
