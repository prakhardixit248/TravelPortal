import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-userlogin',
  templateUrl: './userlogin.component.html',
  styleUrls: ['./userlogin.component.css']
})
export class UserloginComponent implements OnInit {

  isFoo:boolean=false;

  form = new FormGroup({
    email: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required])});
  constructor(private http: HttpClient) { }

  ngOnInit(): void
   {
  }

  onSubmit(user)
  {
    var body="email="+user.email+"&password="+user.password;

    if(!this.isFoo)
    {
      this.http.post<any>("http://localhost:8083/travelportal/signin", body)
      .subscribe((data)=>
      {
                  localStorage.setItem("currentUser",data);
      });
    }
    else
    {
      this.http.post<any>("http://localhost:8083/travelportal/adminlogin", body)
      .subscribe((data)=>
      {
        if(data)
        {
          
        }
      });
    }
  }
}
