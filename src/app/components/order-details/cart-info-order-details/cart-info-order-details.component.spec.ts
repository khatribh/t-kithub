import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CartInfoOrderDetailsComponent } from './cart-info-order-details.component';

describe('CartInfoOrderDetailsComponent', () => {
  let component: CartInfoOrderDetailsComponent;
  let fixture: ComponentFixture<CartInfoOrderDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CartInfoOrderDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CartInfoOrderDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
