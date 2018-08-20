import { Component, OnInit, Input} from '@angular/core';
import { RADIO_CONTROL_VALUE_ACCESSOR } from 'ngx-bootstrap/buttons/button-radio.directive';

@Component({
  selector: 'app-cart-info-order-details',
  templateUrl: './cart-info-order-details.component.html',
  styleUrls: ['./cart-info-order-details.component.scss']
})
export class CartInfoOrderDetailsComponent implements OnInit {

  @Input() event: object;
  @Input() ticketNo: number;
  @Input() price: number;
  totalPrice: number;
  constructor() { }

  ngOnInit() {
    this.totalPrice=this.ticketNo* this.price;
  }
  onChange(){
    console.log(this.ticketNo);
        console.log(this.price);
    this.totalPrice = this.ticketNo*this.price;
  }
  increase(){
    // console.log(value);
    console.log(this.ticketNo);
    this.ticketNo++;
    this.onChange();
  }
  decrease(){
    this.ticketNo--;
    this.onChange();
  }
}
