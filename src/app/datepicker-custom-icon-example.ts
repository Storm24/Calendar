import { Component, ViewEncapsulation } from '@angular/core';
import { MatCalendarCellClassFunction } from '@angular/material/datepicker';

/** @title Datepicker with custom icon */
@Component({
  selector: 'datepicker-custom-icon-example',
  styleUrls: ['datepicker-custom-calendar.scss'],
  templateUrl: 'datepicker-custom-icon-example.html',
  encapsulation: ViewEncapsulation.None,
})
export class DatepickerCustomIconExample {
  days: number;
  sDate: Date;
  endDate: number;
  startRDate: Date;
  endRDate: Date;
  clicked = false;
  ngOnInit() {}

  AddCalendarDaysSubmit(data: any) {
    this.clicked = true;
    this.startRDate = new Date(data.startDate);
    this.sDate = data.startDate;
    this.days = parseInt(data.daysAdded);
    this.endRDate = new Date(this.DateCalculation(this.days, this.sDate));
  }
  DateCalculation(days: number, start: Date) {
    this.endDate = start.setDate(start.getDate() + days);
    return this.endDate;
  }
  dateClass: MatCalendarCellClassFunction<Date> = (cellDate, view) => {
    // Only highligh dates inside the month view.
    if (view === 'month') {
      const date = cellDate.getDay();
      // Highlight the weekends
      return date === 0 || date === 6 ? 'custom-date-class' : '';
    }

    return '';
  };
}
/*
Time limit Notes:
1. even though the selected dates are highlighted, they are not green like requested.
2. I did not have enough time to gray out the unselected dates on result calendar.
3. I could add some validation around the number input and date inputs, also gray out the result range box until submit button is hit.
4. could expand and add save button to save the scheduled dates.

*/

/**  Copyright 2022 Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at https://angular.io/license */
