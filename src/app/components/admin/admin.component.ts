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
  constructor(
    private adminService: AdminService
  ) { }

  // When the Add item button is clicked, this will change the variable newItem to true which tells the template to display the form.
  addItem(){
    this.newItem = !this.newItem;
  }
 

  // This Function just refreshes the admin component without refreshing the page also sets newItem to false to hide the new item form
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
