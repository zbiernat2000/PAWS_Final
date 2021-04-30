import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateDispenseComponent } from './update-dispense.component';

describe('UpdateDispenseComponent', () => {
  let component: UpdateDispenseComponent;
  let fixture: ComponentFixture<UpdateDispenseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateDispenseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateDispenseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
