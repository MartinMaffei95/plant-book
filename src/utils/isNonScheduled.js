import { isToday } from './isToday';

export const isNonScheduled = (value) => {
  if (
    value === null ||
    value === undefined ||
    value?.name === 'Nunca' ||
    (value?.scheduled === false && !isToday(value?.last_execution))
  )
    return true;
  // if (!isToday(value)) return false;
  return false;
};
