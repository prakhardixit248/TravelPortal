import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UserloginComponent} from './userlogin/userlogin.component';
import {UserRegistrationComponent} from './user-registration/user-registration.component';
import { UserhomepageComponent } from './userhomepage/userhomepage.component';
import { TicketrequestComponent } from './ticketrequest/ticketrequest.component';
import { FpasswordComponent } from './fpassword/fpassword.component';
import { TicketlistComponent } from './ticketlist/ticketlist.component';
const routes: Routes = [
  {path: '', component: UserloginComponent},
  {path: 'forgot_password', component: FpasswordComponent},
  {path: 'user_registration', component: UserRegistrationComponent},
  {path: 'user_homepage', component: UserhomepageComponent},
  {path: 'user_homepage/ticket_request', component: TicketrequestComponent},
  {path: 'user_homepage/ticket_list', component: TicketlistComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
