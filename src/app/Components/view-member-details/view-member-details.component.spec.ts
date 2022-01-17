import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewMemberDetailsComponent } from './view-member-details.component';

describe('ViewMemberDetailsComponent', () => {
  let component: ViewMemberDetailsComponent;
  let fixture: ComponentFixture<ViewMemberDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewMemberDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewMemberDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
