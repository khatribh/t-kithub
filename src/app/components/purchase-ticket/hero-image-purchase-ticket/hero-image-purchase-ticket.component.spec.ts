import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroImagePurchaseTicketComponent } from './hero-image-purchase-ticket.component';

describe('HeroImagePurchaseTicketComponent', () => {
  let component: HeroImagePurchaseTicketComponent;
  let fixture: ComponentFixture<HeroImagePurchaseTicketComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeroImagePurchaseTicketComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroImagePurchaseTicketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
