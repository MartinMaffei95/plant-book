import moment from 'moment';
import { config } from '../Config/config';

export const formatingDate = (date) => {
  date = moment(date);
  const theDate = date.format(config.date_format);
  return theDate;
};
