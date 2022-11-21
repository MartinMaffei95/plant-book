import moment from 'moment';
import { config } from '../Config/config';

export const isToday = (date) => {
  if (date === null) return false;

  if (moment(date, config.date_format).isSame(moment(), 'day')) {
    return true;
  } else return false;
};
