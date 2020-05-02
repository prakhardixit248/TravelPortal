import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {AppComponent} from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { UserloginComponent } from './userlogin/userlogin.component';
import { UserRegistrationComponent } from './user-registration/user-registration.component';
import { FpasswordComponent } from './fpassword/fpassword.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { UserhomepageComponent } from './userhomepage/userhomepage.component';
import { TicketrequestComponent } from './ticketrequest/ticketrequest.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatInputModule} from "@angular/material/input";
import {MatNativeDateModule} from "@angular/material/core";
import {MatRadioModule} from '@angular/material/radio';
import {MatButtonModule} from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';

@NgModule({
  declarations: [
    AppComponent,
    UserloginComponent,
    UserRegistrationComponent,
    FpasswordComponent,
    AdminloginComponent,
    UserhomepageComponent,
    TicketrequestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MatSelectModule,
    MatDatepickerModule,
    MatInputModule,
    MatNativeDateModule,
    MatRadioModule,
    MatButtonModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
