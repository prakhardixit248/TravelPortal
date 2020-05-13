import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { UserRegistrationComponent } from './user-registration/user-registration.component';
import { TicketrequestComponent } from './ticketrequest/ticketrequest.component';
import { FpasswordComponent } from './fpassword/fpassword.component';
import { TicketlistComponent } from './ticketlist/ticketlist.component';


@Injectable({
  providedIn: 'root'
})
export class RegistrationService {
  currentUser=localStorage.getItem("currentUser");

  _url = 'http://localhost:8083/signup';
  url1 = 'http://localhost:8083/ticketgeneration';
  url2 = 'http://localhost:8083/forgotpassword';
  url4 = 'http://localhost:8083/travelportal/tickets';
  url3='http://localhost:8083/gettickets'
  constructor(private _http: HttpClient) { }

  register(user: UserRegistrationComponent){
    return this._http.post<any>(this._url, user);
  }
  tsubmit(ticket: TicketrequestComponent)
  {
    return this._http.post<any>(this.url1, ticket);
  }
  esubmit(email: FpasswordComponent)
  {
    return this._http.post<any>(this.url2, this.currentUser);
  }
  alltickets()
  {
    return this._http.post<any>(this.url3,this.currentUser);
  }
  alladmintickets()
  {
    return this._http.get<any>(this.url4);
  }
}