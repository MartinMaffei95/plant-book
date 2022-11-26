import moment from 'moment';
import { config } from '../../Config/config';
import { formatingDate } from '../../utils/formatingDate';
import { dictionaryDay, nWeekOfMounth } from '../../utils/isLastWeek';
import { isSameDay, isSameOfThisDays, isToday } from '../../utils/isToday';

//   {
//   type: 'garden/caringPlant',
//   payload: {
//     plant_name: 'Menta',                   //=> NAME
//     field_name: 'last_watering',           //=> FIELD TO UPDATE
//     actualSchedule: 'watered_schedule'     //=> NAME OF SCHEDULE TO SELECT
//   }
// }

export const plantAction = (state, action) => {
  //recibe state (to change) plant name(unic value) and field name to edit
  //find the plant who need to change state
  const { plant_name, field_name, actualSchedule } = action.payload;

  const plantFinded = state.plants.map((p) => {
    // ## find the plant by name
    if (p.plant_name === plant_name) {
      // ## getting 'next_event' and 'step' value vor  the plant
      const actualDateEvt = moment(p[actualSchedule]['next_event']);
      const step = p[actualSchedule]['step_repeat'];

      // ## update by 'step_format' === 'DAY'
      if (p[actualSchedule]['step_format'] === 'DAY') {
        if (isToday(actualDateEvt) || moment().isAfter(actualDateEvt)) {
          p[actualSchedule]['last_execution'] = moment();
          while (!moment(p[actualSchedule]['next_event']).isAfter(moment())) {
            p[actualSchedule]['next_event'] = actualDateEvt.add(step, 'days');
          }

          // ## last event BY_STEPS
          if (p[actualSchedule]['end_handler'] === 'BY_STEPS') {
            p[actualSchedule]['repeats'] = p[actualSchedule]['repeats'] + 1;

            if (
              p[actualSchedule]['repeats'] >=
              p[actualSchedule]['step_repeat_for_end']
            ) {
              // alert('ULTIMO EVENTO x STEP');

              p[actualSchedule]['next_event'] = null;
              p[actualSchedule]['scheduled'] = false;
            }
          }
          // ## last event BY_DATE
          // ## if today is  the last evt or is after
          if (p[actualSchedule]['end_handler'] === 'BY_DATE') {
            if (
              isToday(p[actualSchedule]['end_date']) ||
              moment().isAfter(p[actualSchedule]['end_date'])
            ) {
              // alert('ULTIMO EVENTO x DATE');
              p[actualSchedule]['next_event'] = null;
              p[actualSchedule]['scheduled'] = false;
            }
          }

          p[field_name] = formatingDate(moment());
          localStorage.setItem('garden', JSON.stringify(state.plants));
        }
      }

      // ## update by 'step_format' === 'WEEK'
      if (p[actualSchedule]['step_format'] === 'WEEK') {
        if (isToday(actualDateEvt) || moment().isAfter(actualDateEvt)) {
          while (
            !isSameOfThisDays(
              // ToDo: change name of function to 'isSomeOfThisDays'
              p[actualSchedule]['next_event'],
              p[actualSchedule]['days_to_repeat']
            )
          ) {
            p[actualSchedule]['next_event'] = actualDateEvt.add(1, 'days');
          }
        }

        // ## last event BY_STEPS
        if (p[actualSchedule]['end_handler'] === 'BY_STEPS') {
          if (
            moment(p[actualSchedule]['last_execution']).week() <
              moment().week() ||
            !p[actualSchedule]['last_execution']
          ) {
            p[actualSchedule]['repeats'] = p[actualSchedule]['repeats'] + 1;
          }

          if (
            p[actualSchedule]['repeats'] >=
            p[actualSchedule]['step_repeat_for_end']
          ) {
            // alert('ESTE FUE EL ULTIMO EVENTO x STEP');

            p[actualSchedule]['next_event'] = null;
            p[actualSchedule]['scheduled'] = false;
          }
        }

        // ## last event BY_DATE
        // ## if today is  the last evt or is after
        if (p[actualSchedule]['end_handler'] === 'BY_DATE') {
          if (
            isToday(p[actualSchedule]['end_date']) ||
            moment(p[actualSchedule]['next_event']).isAfter(
              p[actualSchedule]['end_date']
            )
          ) {
            alert('ULTIMO EVENTO x DATE');
            p[actualSchedule]['next_event'] = null;
            p[actualSchedule]['scheduled'] = false;
          }
        }
      }

      // ## update by 'step_format' === 'MONTH'
      if (p[actualSchedule]['step_format'] === 'MONTH') {
        let month_data = p[actualSchedule]['month_data'];
        if (isToday(actualDateEvt) || moment().isAfter(actualDateEvt)) {
          if (month_data.handler === 'EVERY') {
            while (!moment(p[actualSchedule]['next_event']).isAfter(moment())) {
              p[actualSchedule]['next_event'] = actualDateEvt.add(1, 'M');
            }
          }
          let startOfMonth = moment().startOf('month');
          const finalOfMonth = moment().endOf('month');

          if (!startOfMonth.isAfter(moment())) {
            startOfMonth.add(1, 'M');
          }
          if (month_data.handler === 'LAST') {
            while (finalOfMonth.day() !== month_data.day) {
              finalOfMonth.subtract(1, 'day');
              console.log('1');
            }
            p[actualSchedule]['next_event'] = finalOfMonth;
          }
          if (month_data.handler === 'FIRST') {
            while (startOfMonth.day() !== month_data.day) {
              startOfMonth.add(1, 'day');
              console.log('2');
            }
            p[actualSchedule]['next_event'] = startOfMonth;
          }
          if (month_data.handler === 'SECOND') {
            startOfMonth = startOfMonth.add(7, 'd'); // second
            while (startOfMonth.day() !== month_data.day) {
              startOfMonth.add(1, 'day');
              console.log('2');
            }
            p[actualSchedule]['next_event'] = startOfMonth;
          }
          if (month_data.handler === 'THIRD') {
            startOfMonth = startOfMonth.add(14, 'd'); // third
            while (startOfMonth.day() !== month_data.day) {
              startOfMonth.add(1, 'day');
              console.log('3');
            }
            p[actualSchedule]['next_event'] = startOfMonth;
          }
          if (month_data.handler === 'FOURTH') {
            startOfMonth = startOfMonth.add(21, 'd'); // forrth
            while (startOfMonth.day() !== month_data.day) {
              startOfMonth.add(1, 'day');
              console.log('4');
            }
            p[actualSchedule]['next_event'] = startOfMonth;
          }
        }
      }

      // ## update by 'step_format' === 'YEAR'
      if (p[actualSchedule]['step_format'] === 'YEAR') {
      }

      // ## Setting the last caring of plant on Today
      p[actualSchedule]['last_execution'] = moment();

      p[field_name] = formatingDate(moment());
      localStorage.setItem('garden', JSON.stringify(state.plants));
    }

    // console.log(nextMonth);
    return p;
  });
  return plantFinded;
};
