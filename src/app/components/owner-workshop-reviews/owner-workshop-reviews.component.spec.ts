import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OwnerWorkshopReviewsComponent } from './owner-workshop-reviews.component';

describe('OwnerWorkshopReviewsComponent', () => {
  let component: OwnerWorkshopReviewsComponent;
  let fixture: ComponentFixture<OwnerWorkshopReviewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OwnerWorkshopReviewsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OwnerWorkshopReviewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
