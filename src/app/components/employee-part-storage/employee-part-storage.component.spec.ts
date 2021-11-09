import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeePartStorageComponent } from './employee-part-storage.component';

describe('EmployeePartStorageComponent', () => {
  let component: EmployeePartStorageComponent;
  let fixture: ComponentFixture<EmployeePartStorageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeePartStorageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeePartStorageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
