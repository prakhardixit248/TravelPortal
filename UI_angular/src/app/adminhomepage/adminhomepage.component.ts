import { Component, OnInit } from '@angular/core';
import { RegistrationService } from '../registration.service';
import { WavesModule, TableModule, IconsModule } from 'angular-bootstrap-md';
@Component({
  selector: 'app-adminhomepage',
  templateUrl: './adminhomepage.component.html',
  styleUrls: ['./adminhomepage.component.css']
})
export class AdminhomepageComponent implements OnInit {

  ticketInfo: any[] = [];
  headElements = ['id', 'Expense borne by', 'start date', 'priority'];
  constructor(private  geticket: RegistrationService ) { }

  ngOnInit(): void {
  this.getTickets();
  }
  getTickets(){
    this.geticket.alladmintickets().
    subscribe(
      data2 => {
        // console.log(data2);
        this.ticketInfo = data2._embedded.tickets;
        console.log('Data:', this.ticketInfo);
      },
      err => console.log(err),
      () => console.log('complete')
    )
  }
}

