import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-hero-image-purchase-ticket',
  templateUrl: './hero-image-purchase-ticket.component.html',
  styleUrls: ['./hero-image-purchase-ticket.component.scss']
})
export class HeroImagePurchaseTicketComponent implements OnInit {

  @Input() event: Object;
  constructor() { 
    
  }

  ngOnInit() {
    
  }

}
