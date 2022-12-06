import { isNonScheduled } from './isNonScheduled';
import { isToday } from './isToday';
import { isTodayWork } from './isTodayWork';
import { sendNotification } from './sendNotification';

export const isPending = (lastCaring, schedule, plant_name) => {
  console.log(schedule);
  if (isNonScheduled(schedule)) return false;
  const { next_event, init_date } = schedule;
  if (
    (isTodayWork(next_event) && !isToday(lastCaring)) ||
    (isToday(init_date) && !isToday(lastCaring))
  ) {
    return true;
  }

  return false;
};
