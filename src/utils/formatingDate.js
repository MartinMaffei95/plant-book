import moment from 'moment';
import { config } from '../Config/config';

export const formatingDate = (date) => {
  if (!date || date === '') {
    return 'Sin datos';
  }
  const parsingDate = moment(date);
  const theDate = parsingDate.format(config.date_format);
  if (theDate === 'Invalid date') {
    return date;
  }
  return theDate;
};
