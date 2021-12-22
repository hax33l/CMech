import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OwnerNewWorkshopComponent } from './owner-new-workshop.component';

describe('OwnerNewWorkshopComponent', () => {
  let component: OwnerNewWorkshopComponent;
  let fixture: ComponentFixture<OwnerNewWorkshopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OwnerNewWorkshopComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OwnerNewWorkshopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
