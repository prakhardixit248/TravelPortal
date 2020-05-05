import { Component, OnInit } from '@angular/core';
import { RegistrationService } from '../registration.service';

@Component({
  selector: 'app-ticketlist',
  templateUrl: './ticketlist.component.html',
  styleUrls: ['./ticketlist.component.css']
})
export class TicketlistComponent implements OnInit {

  ticketInfo: any[] = [];
  constructor(private  geticket: RegistrationService ) { }

  ngOnInit(): void {
  this.getTickets();
  }
  getTickets(){
    this.geticket.alltickets().
    subscribe(
      data2 => {
        this.ticketInfo = data2.tickets;
        //console.log('Data:', this.ticketInfo);
      },
      err => console.log(err),
      () => console.log('complete')
    )
  }

}
