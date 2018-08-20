import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EventService } from '../../services/events/events.service.client';

@Component({
  selector: 'app-purchase-ticket',
  templateUrl: './purchase-ticket.component.html',
  styleUrls: ['./purchase-ticket.component.scss']
})
export class PurchaseTicketComponent implements OnInit {

  eventID: string;
  event: Object;
  constructor(private activatedRoute: ActivatedRoute, private eventService: EventService) { }

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