import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserloginComponent } from './userlogin/userlogin.component';
import { UserRegistrationComponent } from './user-registration/user-registration.component';
import {HttpClientModule} from '@angular/common/http';
import {RegistrationService} from './registration.service';

@NgModule({
  declarations: [
    AppComponent,
    UserloginComponent,
    UserRegistrationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    RegistrationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
