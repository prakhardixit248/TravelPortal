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

  _url = 'http://localhost:8083/travelportal/signup';
  url1 = 'http://localhost:8083/travelportal/ticketgeneration';
  url2 = '';
  url3 = '';

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
    return this._http.post<any>(this.url2, email);
  }
  alltickets()
  {
    return this._http.get<any>(this.url3);
  }
}