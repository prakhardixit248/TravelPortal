import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketrequestComponent } from './ticketrequest.component';

describe('TicketrequestComponent', () => {
  let component: TicketrequestComponent;
  let fixture: ComponentFixture<TicketrequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TicketrequestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TicketrequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
