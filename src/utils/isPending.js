import { isNonScheduled } from './isNonScheduled';
import { isToday } from './isToday';
import { isTodayWork } from './isTodayWork';

export const isPending = (lastCaring, schedule) => {
  if (isNonScheduled(schedule)) return false;
  const { next_event, init_date } = schedule;
  if (
    (isTodayWork(next_event) && !isToday(lastCaring)) ||
    (isToday(init_date) && !isToday(lastCaring))
  )
    navigator.serviceWorker.controller.postMessage({
      type: 'Tenes una tarea pendiente',
      payload: 'Mi tarea',
    });
  return true;
  return false;
};
