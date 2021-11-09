import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeRepairOrderComponent } from './employee-repair-order.component';

describe('EmployeeRepairOrderComponent', () => {
  let component: EmployeeRepairOrderComponent;
  let fixture: ComponentFixture<EmployeeRepairOrderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeRepairOrderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeRepairOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
