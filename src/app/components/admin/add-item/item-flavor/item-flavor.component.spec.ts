import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemFlavorComponent } from './item-flavor.component';

describe('ItemFlavorComponent', () => {
  let component: ItemFlavorComponent;
  let fixture: ComponentFixture<ItemFlavorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemFlavorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemFlavorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
