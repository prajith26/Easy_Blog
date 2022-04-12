import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageadminsComponent } from './manageadmins.component';

describe('ManageadminsComponent', () => {
  let component: ManageadminsComponent;
  let fixture: ComponentFixture<ManageadminsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageadminsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageadminsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
