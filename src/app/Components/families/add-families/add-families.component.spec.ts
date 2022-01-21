import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFamiliesComponent } from './add-families.component';

describe('AddMembersComponent', () => {
  let component: AddFamiliesComponent;
  let fixture: ComponentFixture<AddFamiliesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddFamiliesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddFamiliesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
