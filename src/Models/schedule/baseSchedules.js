import moment from 'moment';

const today = moment();

export const never = {
  name: 'Nunca',
  init_date: null,
  step_repeat: null,
  next_event: null,
  final_date: null,
  notificate: false,
  extra_data: null,
};
export const everyDays = {
  name: 'Todos los dias',
  init_date: today,
  step_repeat: 1,
  next_event: today.add(1, 'd'),
  final_date: null,
  notificate: false,
  extra_data: null,
};
export const everyTwoDays = {
  name: 'Cada dos dias',
  init_date: today,
  step_repeat: 2,
  next_event: today.add(2, 'd'),
  final_date: null,
  notificate: false,
  extra_data: null,
};
export const everyWeek = {
  name: 'Cada semana',
  init_date: today,
  step_repeat: 7,
  next_event: today.add(7, 'd'),
  final_date: null,
  notificate: false,
  extra_data: null,
};
