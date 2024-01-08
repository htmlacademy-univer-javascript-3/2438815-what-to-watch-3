const monthsList = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
];

export function dateTimeConvert(datetimeString : string): string {
  const datetime = new Date(datetimeString);
  const year = datetime.getFullYear().toString();
  const day = datetime.getDay().toString();
  const month = monthsList[datetime.getMonth() - 1];
  return (`${month} ${day}, ${year}`);
}
