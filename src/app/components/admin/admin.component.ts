import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../services/admin.service'

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  menuItems: any = ""

  constructor(
    private adminService: AdminService
  ) { }

  ngOnInit(): void {
    // subscribe to the get request and console.log the data once its returned
    this.adminService
    .getMenuItems()
    .subscribe((items) => {
      this.menuItems = items
      console.log(this.menuItems)
    })
  }

}
