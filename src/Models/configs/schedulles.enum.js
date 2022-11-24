import moment from 'moment';

const today = moment();

export const schedulles = [
  {
    name: 'Nunca',
    id: 'NEVER',
    init_date: null,
    step_repeat: null,
    next_event: null,
    final_date: null,
    notificate: false,
    extra_data: null,
  },
  {
    name: 'Todos los dias',
    id: 'EVERY_DAY',
    init_date: moment(),
    step_repeat: 1,
    next_event: moment().add(1, 'd'),
    final_date: null,
    notificate: false,
    extra_data: null,
  },
  {
    name: 'Cada dos dias',
    id: 'TWO_DAYS',
    init_date: moment(),
    step_repeat: 2,
    next_event: moment().add(2, 'd'),
    final_date: null,
    notificate: false,
    extra_data: null,
  },
  {
    name: 'Cada semana',
    id: 'EVERY_WEEK',
    init_date: moment(),
    step_repeat: 7,
    next_event: moment().add(7, 'd'),
    final_date: null,
    notificate: false,
    extra_data: null,
  },
  {
    name: 'Cada dos semanas',
    id: 'EVEN_TWO_WEEKS',
    init_date: moment(),
    step_repeat: 14,
    next_event: moment().add(14, 'd'),
    final_date: null,
    notificate: false,
    extra_data: null,
  },
];
