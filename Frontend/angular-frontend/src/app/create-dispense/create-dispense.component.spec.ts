import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateDispenseComponent } from './create-dispense.component';

describe('CreateDispenseComponent', () => {
  let component: CreateDispenseComponent;
  let fixture: ComponentFixture<CreateDispenseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateDispenseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateDispenseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
