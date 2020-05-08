import { Component, OnInit } from '@angular/core';
import { RegistrationService } from '../registration.service';
import { WavesModule, TableModule, IconsModule } from 'angular-bootstrap-md';
@Component({
  selector: 'app-ticketlist',
  templateUrl: './ticketlist.component.html',
  styleUrls: ['./ticketlist.component.css']
})
export class TicketlistComponent implements OnInit {

  ticketInfo: any[] = [];
  headElements = ['id', 'Expense borne by', 'start date', 'priority'];
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
