import { isToday } from './isToday';

export const isTodayWork = (value) => {
  if (value === null || value === undefined) return false;
  if (!isToday(value)) return false;
  return true;
};
