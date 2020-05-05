import { Component, OnInit } from '@angular/core';
import { RegistrationService } from '../registration.service';
import { FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-ticketrequest',
  templateUrl: './ticketrequest.component.html',
  styleUrls: ['./ticketrequest.component.css']
})
export class TicketrequestComponent implements OnInit {

  form = new FormGroup({
    rtype: new FormControl('', [Validators.required]),
    ptype: new FormControl('', [Validators.required]),
    pno: new FormControl('', [ Validators.required, Validators.maxLength(25)]),
    tcity: new FormControl('', [Validators.required]),
    lcity: new FormControl('', [Validators.required]),
    sdate: new FormControl('', [Validators.required]),
    edate: new FormControl('', [Validators.required]),
    pname: new FormControl('', [ Validators.required, Validators.maxLength(100)]),
    approver: new FormControl('', [Validators.maxLength(100)]),
    radio1: new FormControl('', [Validators.required]),
    duration: new FormControl('', [Validators.maxLength(100)]),
    uamount: new FormControl('', [Validators.maxLength(500)]),
    details: new FormControl('', [Validators.required, Validators.maxLength(1000)])
  });
  submitted = false;
  get f(){
    return this.form.controls;
  }
  constructor(private tservice: RegistrationService) { }

  ngOnInit(): void {
  }
  onSubmit()
  {
    this.tservice.tsubmit(this.form.value)
    .subscribe(
      data => console.log('Success!', data),
      error => console.log('Error!', error)
    );
    console.log(this.form.value);
  }
}
