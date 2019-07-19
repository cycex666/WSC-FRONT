import { Component, OnInit, ViewChild,TemplateRef } from '@angular/core';
import {Subject} from 'rxjs';
import {
  CalendarView
} from 'angular-calendar';
import { from } from 'rxjs';

@Component({
  selector: 'app-scheduler-component',
  templateUrl: './scheduler.component.html'
})
export class SchedulerComponent implements OnInit {
  view: CalendarView = CalendarView.Month;
  CalendarView = CalendarView;
  viewDate: Date = new Date();
  refresh: Subject<any> = new Subject();
  activeDayIsOpen = true;
  
  constructor() { }

  ngOnInit() {
  }

}
