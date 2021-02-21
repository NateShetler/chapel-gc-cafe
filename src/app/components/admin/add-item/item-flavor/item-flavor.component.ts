import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { faPlus, faSave } from '@fortawesome/free-solid-svg-icons';
import { faTrashAlt } from '@fortawesome/free-regular-svg-icons';
import { AdminService } from '../../../../services/admin.service'
import { FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-item-flavor',
  templateUrl: './item-flavor.component.html',
  styleUrls: ['./item-flavor.component.css']
})
export class ItemFlavorComponent implements OnInit {
  @Input() itemFlavors;
  @Input() menuItemId;
  @Output() deletedFlavor = new EventEmitter<boolean>();
  public flavorIds: Array<any> = [];
  public flavors;
  public addingFlavor: boolean = false;

  faPlus = faPlus;
  faSave = faSave;
  faTrashAlt = faTrashAlt;


  // Called when user clicks to remove specific flavor
  removeFlavor(flavorId){
    console.log('removed flavor clicked')
    this.adminService.deleteFlavor(flavorId).subscribe(() => {
      this.adminService.getMenuItemsById(this.menuItemId).subscribe((menuItem) => {
        this.flavors = menuItem.flavors
      })

    })
  }

  


  addFlavor(){
    this.addingFlavor = true;
  }

  constructor(
    private adminService: AdminService,
    private formBuilder: FormBuilder
  ) { }

  // building the form for adding flavors
  addFlavorForm = this.formBuilder.group({
    flavor: ''

  });

  submitFlavor() {
    console.log(this.addFlavorForm.value)
    this.adminService.addFlavor(this.addFlavorForm.value).subscribe((flavor) => {
      this.flavorIds.push(flavor.id)
      this.adminService.updateMenuItemFlavor(this.flavorIds, this.menuItemId).subscribe((res) => {
        console.log(`RESPONSE ${res}`)
        this.adminService.getMenuItemsById(this.menuItemId).subscribe((menuItem) => {
          this.flavors = menuItem.flavors
          this.addFlavorForm.reset()
        })
      })
    })
    
  }

  ngOnInit(): void {
    if (this.itemFlavors) {
      this.flavors = this.itemFlavors
      this.itemFlavors.forEach(flavor => {
        this.flavorIds.push(flavor.id)
      
      });
      console.log(this.flavorIds)
    }
 
    
  }

}
