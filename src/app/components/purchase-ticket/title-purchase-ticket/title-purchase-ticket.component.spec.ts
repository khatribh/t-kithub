import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TitlePurchaseTicketComponent } from './title-purchase-ticket.component';

describe('TitlePurchaseTicketComponent', () => {
  let component: TitlePurchaseTicketComponent;
  let fixture: ComponentFixture<TitlePurchaseTicketComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TitlePurchaseTicketComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TitlePurchaseTicketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
