import { Component, OnInit } from '@angular/core';
import { RegistrationService } from '../registration.service';

@Component({
  selector: 'app-adminhomepage',
  templateUrl: './adminhomepage.component.html',
  styleUrls: ['./adminhomepage.component.css']
})
export class AdminhomepageComponent implements OnInit {

  ticketInfo: any[] = [];
  constructor(private  geticket: RegistrationService ) { }

  ngOnInit(): void {
  this.getTickets();
  }
  getTickets(){
    this.geticket.alladmintickets().
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
}
