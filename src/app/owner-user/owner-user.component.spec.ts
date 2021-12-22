import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OwnerUserComponent } from './owner-user.component';

describe('OwnerUserComponent', () => {
  let component: OwnerUserComponent;
  let fixture: ComponentFixture<OwnerUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OwnerUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OwnerUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
