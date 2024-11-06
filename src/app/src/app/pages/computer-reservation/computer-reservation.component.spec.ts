import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComputerReservationComponent } from './computer-reservation.component';

describe('ComputerReservationComponent', () => {
  let component: ComputerReservationComponent;
  let fixture: ComponentFixture<ComputerReservationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComputerReservationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ComputerReservationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
