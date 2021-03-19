import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  menuUrl: 'https://api.thechapel.green/cafe-menus';

  constructor(private http:HttpClient) { }

  getMenuItems()
  {

    return [
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

  getMenuItemsFromStrapi()
  {
    return this.http.get<any>(`${this.menuUrl}`);
  }
}
