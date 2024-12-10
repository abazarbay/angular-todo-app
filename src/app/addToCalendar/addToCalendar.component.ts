import { Component } from '@angular/core';

@Component({
  selector: 'app-add-to-calendar',
  template: `
    <h1>Add to Calendar</h1>
    <p>You can add a sample event to your calendar</p>
    <button (click)="handleAddToCalendar()">Add Event to Calendar</button>
  `,
})
export class AddToCalendarComponent {
  handleAddToCalendar(): void {
    const event = `BEGIN:VCALENDAR
VERSION:2.0
BEGIN:VEVENT
SUMMARY:Sample Event
DTSTART:20240101T090000Z
DTEND:20240101T100000Z
LOCATION:Online
DESCRIPTION:This is a sample event description.
END:VEVENT
END:VCALENDAR`;

    const blob = new Blob([event], { type: 'text/calendar;charset=utf-8' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'event.ics';
    link.click();
  }
}