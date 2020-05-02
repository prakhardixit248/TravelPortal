import { Component, OnInit } from '@angular/core';
interface Request {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-ticketrequest',
  templateUrl: './ticketrequest.component.html',
  styleUrls: ['./ticketrequest.component.css']
})
export class TicketrequestComponent implements OnInit {

  constructor() { }
  foods: Request[] = [
    {value: '0', viewValue: 'Travel Tickets'},
    {value: '1', viewValue: 'Hotel Stay'},
    {value: '2', viewValue: 'Visa'},
    {value: '3', viewValue: 'Work Permit'}
  ];
  priority: Request[] = [
    {value: '0', viewValue: 'Normal'},
    {value: '1', viewValue: 'Urgent'},
    {value: '2', viewValue: 'Immediate'}
  ];
  travelcity: Request[] = [
    {value: '0', viewValue: 'Delhi'},
    {value: '1', viewValue: 'New York'},
    {value: '2', viewValue: 'London'},
    {value: '3', viewValue: 'Berlin'}
  ];
  favoriteSeason: string;
  seasons: string[] = ['Nagarro', 'Client'];
  ngOnInit(): void {
  }

}
