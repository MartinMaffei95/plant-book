import moment from 'moment';
import { config } from '../Config/config';

export const isToday = (date) => {
  if (date === null) return false;

  if (moment(date, config.date_format).isSame(moment(), 'day')) {
    return true;
  } else return false;
};

export const isSameOfThisDays = (dateToCompare, arrayOfDates) => {
  if (!Array.isArray(arrayOfDates)) throw new TypeError('Need a Array');

  dateToCompare = moment(dateToCompare); // => number of day
  if (
    arrayOfDates.includes(dateToCompare.weekday()) &&
    dateToCompare.isAfter(moment())
  )
    return true;

  return false;
};

//  moment('2022-11-27T14:41:47.864Z').day() === 0 &&
//    moment('2022-11-25T14:41:47.864Z').isAfter(moment());

export const isSomeAndAfterDay = (
  dateToCompare,
  arrayOfDates,
  isAfterThisDate = moment()
) => {
  if (!Array.isArray(arrayOfDates)) throw new TypeError('Need a Array');

  dateToCompare = moment(dateToCompare).weekday(); // => number of day
  isAfterThisDate = moment(isAfterThisDate);
  if (isAfterThisDate.isAfter(moment())) {
    if (arrayOfDates.find((date) => date === dateToCompare)) return true;
  }
  console.log(dateToCompare);

  return false;
};
