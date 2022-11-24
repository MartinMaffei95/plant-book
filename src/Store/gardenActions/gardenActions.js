import moment from 'moment';
import { config } from '../../Config/config';
import { formatingDate } from '../../utils/formatingDate';
import { isToday } from '../../utils/isToday';

export const plantAction = (state, action) => {
  //recibe state (to change) plant name(unic value) and field name to edit
  //find the plant who need to change state
  const plantFinded = state.plants.map((p) => {
    if (p.plant_name === action.payload.plant_name) {
      //getting 'next_event' and 'ste`p' value vor  the plant

      const actualDateEvt = moment(
        p[action.payload.actualSchedule]['next_event']
      );
      const step = p[action.payload.actualSchedule]['step_repeat'];
      if (isToday(actualDateEvt) || moment().isAfter(actualDateEvt)) {
        while (
          !moment(p[action.payload.actualSchedule]['next_event']).isAfter(
            moment()
          )
        ) {
          p[action.payload.actualSchedule]['next_event'] = actualDateEvt.add(
            step,
            'days'
          );
          console.log('actualizacion', actualDateEvt);
        }
      }
      p[action.payload.field_name] = formatingDate(moment());
      localStorage.setItem('garden', JSON.stringify(state.plants));
    }
    return p;
  });
  return plantFinded;
};
