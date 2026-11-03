import { WEDDING_DATA } from '../data/weddingData';

export function getGoogleCalendarUrl(): string {
  const { title, description, location, startTimeUTC, endTimeUTC } = WEDDING_DATA.calendarDetails;
  
  const params = new URLSearchParams({
    action: 'TEMPLATE',
    text: title,
    dates: `${startTimeUTC}/${endTimeUTC}`,
    details: description,
    location: location,
  });

  return `https://calendar.google.com/calendar/render?${params.toString()}`;
}

export function downloadIcsFile(): void {
  const { title, description, location, startTimeUTC, endTimeUTC } = WEDDING_DATA.calendarDetails;
  
  const icsContent = [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//Ajay and Asha Wedding//EN',
    'CALSCALE:GREGORIAN',
    'METHOD:PUBLISH',
    'BEGIN:VEVENT',
    `UID:wedding-ajay-asha-20261129@weddinginvitation.com`,
    `DTSTAMP:${new Date().toISOString().replace(/[-:]/g, '').split('.')[0]}Z`,
    `DTSTART:${startTimeUTC}`,
    `DTEND:${endTimeUTC}`,
    `SUMMARY:${title}`,
    `DESCRIPTION:${description.replace(/\n/g, '\\n')}`,
    `LOCATION:${location}`,
    'STATUS:CONFIRMED',
    'BEGIN:VALARM',
    'TRIGGER:-P1D',
    'ACTION:DISPLAY',
    'DESCRIPTION:Reminder: Ajay & Asha Wedding Tomorrow',
    'END:VALARM',
    'END:VEVENT',
    'END:VCALENDAR',
  ].join('\r\n');

  const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
  const link = document.createElement('a');
  link.href = window.URL.createObjectURL(blob);
  link.setAttribute('download', 'Ajay-Asha-Wedding.ics');
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

