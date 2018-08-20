import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketDetailsPurchaseTicketComponent } from './ticket-details-purchase-ticket.component';

describe('TicketDetailsPurchaseTicketComponent', () => {
  let component: TicketDetailsPurchaseTicketComponent;
  let fixture: ComponentFixture<TicketDetailsPurchaseTicketComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TicketDetailsPurchaseTicketComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TicketDetailsPurchaseTicketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
