import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { faTrashAlt } from '@fortawesome/free-regular-svg-icons';
import { faPlus, faSave } from '@fortawesome/free-solid-svg-icons';
import { AdminService } from '../../../services/admin.service';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit {
  @Input() menuItem;
  @Input() beingEdited
  @Output() addedMenuItem = new EventEmitter<boolean>();

  faTrashAlt = faTrashAlt;
  faPlus = faPlus;
  faSave = faSave;
  public itemName: string;
  public itemDescription: string;
  public itemPrice: any;
  public itemFlavors: any;
  public title: string;

  constructor(
    private formBuilder: FormBuilder,
    private adminService: AdminService
  ) { }

  
// building the form for the updates
  addMenuItem = this.formBuilder.group({
    name: '',
    description:'',
    price:''

  });

  removeFlavor(flavorId){
    this.adminService.deleteFlavor(flavorId).subscribe(() => {
      // this.addedMenuItem.emit(true);

    })
  }

  onSubmit(beingEdited): void {
    // Upon form submission check to see if its a New item or one thats being edited and make a POST or PUT request accordingly
    if(!beingEdited) {
      this.adminService.addMenuItem(this.addMenuItem.value).subscribe((res)=> {
        console.log(res)
        this.addedMenuItem.emit(true);
      })
    }

    if(beingEdited) {
      this.adminService.updateMenuItem(this.addMenuItem.value, this.menuItem.id).subscribe((res)=> {
        console.log(res)
        this.addedMenuItem.emit(true);
      })
    }
  }

  ngOnInit(): void {
    // If this component is being called to make an edit then this.menuItem will have something stored so we want to carry those values over to the form
    if (!this.menuItem) {
    } else {
    this.title = ` Editing ${this.menuItem.name}`;
    this.addMenuItem = this.formBuilder.group({
      name: this.menuItem.name,
      description: this.menuItem.description,
      price: this.menuItem.price
    });
      this.itemFlavors = this.menuItem.flavors
    }
    
  }

}
