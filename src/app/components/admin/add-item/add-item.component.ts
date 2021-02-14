import { Component, Input, OnInit } from '@angular/core';
import { faTrashAlt } from '@fortawesome/free-regular-svg-icons'
import { faPlus, faSave } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit {
  @Input() menuItem;
  faTrashAlt = faTrashAlt;
  faPlus = faPlus;
  faSave = faSave;
  public itemName: string;
  public itemDescription: string;
  public itemPrice: any;
  public itemFlavors: any;
  public title: string;

  constructor() { }

  

  ngOnInit(): void {
    if (!this.menuItem) {
      this.title = 'New Menu Item'
      this.itemName = '';
      this.itemDescription = '';
      this.itemPrice = '';
      this.itemFlavors = '';
    } else {
      this.title = `Editing ${this.menuItem.name}`
      this.itemName = this.menuItem.name
      this.itemDescription = this.menuItem.description
      this.itemPrice = this.menuItem.price
      this.itemFlavors = this.menuItem.flavors
    }
  }

}
