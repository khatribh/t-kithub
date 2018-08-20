import { Component, OnInit } from '@angular/core';
import { OrderDetailsService } from '../../services/order-details/order-details.service.client';
import { ActivatedRoute } from '@angular/router';
import { EventService } from '../../services/events/events.service.client';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.scss']
})
export class OrderDetailsComponent implements OnInit {

  ticketNo: number;
  price: number;
  eventID: string;
  event: object;
  constructor(private activatedRoute: ActivatedRoute, private eventService: EventService,private orderDetailsService: OrderDetailsService) {
    this.ticketNo = this.orderDetailsService.getTicketNo();
    this.price = this.orderDetailsService.getPrice();
   }

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      params => {
        this.eventID = params['eventID'];
      });
      console.log(this.eventID);
      
      this.getEventDetails();
  }

  getEventDetails() {
    
    this.eventService.getEventDetails(this.eventID).subscribe((eventDetails) => {
      this.event = eventDetails;
       //console.log("In Parent"+this.event);
    })
    
  }
}
 
