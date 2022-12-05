import { isNonScheduled } from './isNonScheduled';
import { isToday } from './isToday';
import { isTodayWork } from './isTodayWork';

export const isPending = (lastCaring, schedule) => {
  if (isNonScheduled(schedule)) return false;
  const { next_event, init_date } = schedule;
  if (
    (isTodayWork(next_event) && !isToday(lastCaring)) ||
    (isToday(init_date) && !isToday(lastCaring))
  ) {
    console.log('mensaje');
    navigator.serviceWorker.controller.postMessage({
      type: 'MENSAJE',
      payload: 'Mi tarea',
    });
    return true;
  }

  return false;
};
