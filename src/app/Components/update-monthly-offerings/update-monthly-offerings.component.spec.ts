import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateMonthlyOfferingsComponent } from './update-monthly-offerings.component';

describe('UpdateMonthlyOfferingsComponent', () => {
  let component: UpdateMonthlyOfferingsComponent;
  let fixture: ComponentFixture<UpdateMonthlyOfferingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateMonthlyOfferingsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateMonthlyOfferingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
