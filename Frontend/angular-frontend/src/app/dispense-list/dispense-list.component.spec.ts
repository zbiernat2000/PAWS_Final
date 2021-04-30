import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DispenseListComponent } from './dispense-list.component';

describe('DispenseListComponent', () => {
  let component: DispenseListComponent;
  let fixture: ComponentFixture<DispenseListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DispenseListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DispenseListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
