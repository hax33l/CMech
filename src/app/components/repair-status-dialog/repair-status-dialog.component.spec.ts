import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RepairStatusDialogComponent } from './repair-status-dialog.component';

describe('RepairStatusDialogComponent', () => {
  let component: RepairStatusDialogComponent;
  let fixture: ComponentFixture<RepairStatusDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RepairStatusDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RepairStatusDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
