import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { UserRegistrationComponent } from './user-registration/user-registration.component';


@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  _url = 'http://localhost:8083/travelportal/signup';
  constructor(private _http: HttpClient) { }

  register(user: UserRegistrationComponent){
    return this._http.post<any>(this._url, user);
  }
}