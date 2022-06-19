import { Component } from '@angular/core';

/** @title Datepicker with custom icon */
@Component({
  selector: 'datepicker-custom-icon-example',
  styleUrls: ['datepicker-custom-calendar.scss'],
  templateUrl: 'datepicker-custom-icon-example.html',
})
export class DatepickerCustomIconExample {
  days: number;
  sDate: Date;
  endDate: number;
  startRDate: Date;
  endRDate: Date;
  clicked = false;

  AddCalendarDaysSubmit(data: any) {
    //when hit multiple times, it messes with the date range, should grey out the button when hit once.
    this.startRDate = new Date(data.startDate);
    this.sDate = data.startDate;
    this.days = parseInt(data.daysAdded);
    this.endRDate = new Date(this.DateCalculation(this.days, this.sDate));
  }
  DateCalculation(days: number, start: Date) {
    this.endDate = start.setDate(start.getDate() + days);
    return this.endDate;
  }
}

/**  Copyright 2022 Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at https://angular.io/license */
