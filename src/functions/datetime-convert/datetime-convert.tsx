import {MONTHS} from '../../consts/months';

export function dateTimeConvert(datetimeString : string): string {
  const datetime = datetimeString.split('-');
  const year = datetime[0];
  const day = datetime[2].slice(0, 2);
  const month = MONTHS[Number(datetime[1]) - 1];
  return (`${month} ${day}, ${year}`);
}
