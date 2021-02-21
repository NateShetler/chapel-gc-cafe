import { Component, Input, OnInit } from '@angular/core';
import { faPlus, faSave } from '@fortawesome/free-solid-svg-icons';
import { faTrashAlt } from '@fortawesome/free-regular-svg-icons';


@Component({
  selector: 'app-item-flavor',
  templateUrl: './item-flavor.component.html',
  styleUrls: ['./item-flavor.component.css']
})
export class ItemFlavorComponent implements OnInit {
  @Input() itemFlavors;
  public flavors;

  faPlus = faPlus;
  faTrashAlt = faTrashAlt;



  constructor() { }

  ngOnInit(): void {
    
    this.flavors = this.itemFlavors
  }

}
