import { Component, Input, OnInit } from '@angular/core';
import { AdminService } from '../../services/admin.service';
import { faPlus, faEdit, faTimes } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  faPlus = faPlus;
  faEdit = faEdit;
  faTimes = faTimes;
  newItem: boolean = false;
  menuItems: any = ""
  public edit: boolean
  editItem(event) {
    let arr = [event]
    let index = arr.indexOf(event);
    event.edit = !event.edit;
    event[index] = event;
    
  }

  addItem(){
    this.newItem = !this.newItem;
  }
  constructor(
    private adminService: AdminService
  ) { }

  refresh(){
    this.ngOnInit();
    this.newItem = false;
  }

  ngOnInit(): void {
    // subscribe to the get request and console.log the data once its returned
    this.adminService
    .getMenuItems()
    .subscribe((items) => {
      items.forEach( (key) => {
        key['edit'] = false;
      })
      this.menuItems = items
      this.edit = false
    })
  }

}
