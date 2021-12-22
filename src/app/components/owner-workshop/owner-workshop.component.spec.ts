import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OwnerWorkshopComponent } from './owner-workshop.component';

describe('OwnerWorkshopComponent', () => {
  let component: OwnerWorkshopComponent;
  let fixture: ComponentFixture<OwnerWorkshopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OwnerWorkshopComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OwnerWorkshopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
