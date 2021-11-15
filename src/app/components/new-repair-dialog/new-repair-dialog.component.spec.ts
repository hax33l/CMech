import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewRepairDialogComponent } from './new-repair-dialog.component';

describe('NewRepairDialogComponent', () => {
  let component: NewRepairDialogComponent;
  let fixture: ComponentFixture<NewRepairDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewRepairDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewRepairDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
