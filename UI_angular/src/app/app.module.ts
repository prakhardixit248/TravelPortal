import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserloginComponent } from './userlogin/userlogin.component';
import { UserRegistrationComponent } from './user-registration/user-registration.component';
import {HttpClientModule} from '@angular/common/http';
import {RegistrationService} from './registration.service';
import { UserhomepageComponent } from './userhomepage/userhomepage.component';
import { TicketrequestComponent } from './ticketrequest/ticketrequest.component';
import { FpasswordComponent } from './fpassword/fpassword.component';
import { TicketlistComponent } from './ticketlist/ticketlist.component';
import { AdminhomepageComponent } from './adminhomepage/adminhomepage.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
@NgModule({
  declarations: [
    AppComponent,
    UserloginComponent,
    UserRegistrationComponent,
    UserhomepageComponent,
    TicketrequestComponent,
    FpasswordComponent,
    TicketlistComponent,
    AdminhomepageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MDBBootstrapModule.forRoot()
  ],
  providers: [
    RegistrationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
