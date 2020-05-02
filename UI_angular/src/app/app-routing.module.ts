import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UserloginComponent} from "./userlogin/userlogin.component";
import {UserRegistrationComponent} from "./user-registration/user-registration.component";
import {FpasswordComponent} from "./fpassword/fpassword.component";
import {AdminloginComponent} from "./adminlogin/adminlogin.component";
import {TicketrequestComponent} from "./ticketrequest/ticketrequest.component";
import {UserhomepageComponent} from "./userhomepage/userhomepage.component";


const routes: Routes = [
  {path:'',component: UserloginComponent},
  {path:'user_registration',component: UserRegistrationComponent},
  {path:'forgot_password',component: FpasswordComponent},
  {path:'admin_login',component: AdminloginComponent},
  {path:'homepage/ticketrequest',component: TicketrequestComponent},
  {path:'homepage',component: UserhomepageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
