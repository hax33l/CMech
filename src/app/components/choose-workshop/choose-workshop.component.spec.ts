import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChooseWorkshopComponent } from './choose-workshop.component';

describe('ChooseWorkshopComponent', () => {
  let component: ChooseWorkshopComponent;
  let fixture: ComponentFixture<ChooseWorkshopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChooseWorkshopComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChooseWorkshopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
