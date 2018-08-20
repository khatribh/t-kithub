import { Component, OnInit, Input } from '@angular/core';
import { OrderDetailsService } from '../../../services/order-details/order-details.service.client';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ticket-details-purchase-ticket',
  templateUrl: './ticket-details-purchase-ticket.component.html',
  styleUrls: ['./ticket-details-purchase-ticket.component.scss']
})
export class TicketDetailsPurchaseTicketComponent implements OnInit {


  @Input() event: Object;
  eventID: string;
  ticketNo: number;
  price: number;
  constructor(private router : Router, private orderDetailsService : OrderDetailsService) { 
    
  }

  ngOnInit() {
    

  }
  onKeyDown(event: any) {
    this.orderDetailsService.setPrice(this.price);
    this.orderDetailsService.setTicketNo(this.ticketNo);
    this.eventID = event.id;
    this.router.navigate(['/details/'+ this.eventID+'/purchase/order-details']);
  }
}