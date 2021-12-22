import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OwnerRepairOrderComponent } from './owner-repair-order.component';

describe('OwnerRepairOrderComponent', () => {
  let component: OwnerRepairOrderComponent;
  let fixture: ComponentFixture<OwnerRepairOrderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OwnerRepairOrderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OwnerRepairOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
