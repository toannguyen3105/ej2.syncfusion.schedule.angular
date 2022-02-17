import { Component, OnInit } from '@angular/core';
import {
  DayService,
  WeekService,
  WorkWeekService,
  MonthService,
  AgendaService,
} from '@syncfusion/ej2-angular-schedule';

@Component({
  selector: 'app-first-component',
  providers: [
    DayService,
    WeekService,
    WorkWeekService,
    MonthService,
    AgendaService,
  ],
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.sass'],
})
export class FirstComponentComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
