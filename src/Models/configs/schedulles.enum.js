import moment from 'moment';

const today = moment();

export const schedulles = [
  {
    NEVER: {
      name: 'Nunca',
      init_date: null,
      step_repeat: null,
      next_event: null,
      final_date: null,
      notificate: false,
      extra_data: null,
    },
  },
  {
    EVERY_DAY: {
      name: 'Todos los dias',
      init_date: moment(),
      step_repeat: 1,
      next_event: moment().add(1, 'd'),
      final_date: null,
      notificate: false,
      extra_data: null,
    },
  },
  {
    TWO_DAYS: {
      name: 'Cada dos dias',
      init_date: moment(),
      step_repeat: 2,
      next_event: moment().add(2, 'd'),
      final_date: null,
      notificate: false,
      extra_data: null,
    },
  },
  {
    EVERY_WEEK: {
      name: 'Cada semana',
      init_date: moment(),
      step_repeat: 7,
      next_event: moment().add(7, 'd'),
      final_date: null,
      notificate: false,
      extra_data: null,
    },
  },
];
