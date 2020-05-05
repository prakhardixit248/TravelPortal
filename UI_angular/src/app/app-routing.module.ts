import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UserloginComponent} from './userlogin/userlogin.component';
import {UserRegistrationComponent} from './user-registration/user-registration.component';
import { AdminhomepageComponent } from './adminhomepage/adminhomepage.component';
const routes: Routes = [
  {path: '', component: UserloginComponent},
  {path: 'user_registration', component: UserRegistrationComponent},
  {path:'homepage',component:UserloginComponent},
  {path:'adminhomepage',component:AdminhomepageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
