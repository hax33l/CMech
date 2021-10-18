import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RepairDialogComponent } from './repair-dialog.component';

describe('RepairDialogComponent', () => {
  let component: RepairDialogComponent;
  let fixture: ComponentFixture<RepairDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RepairDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RepairDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
