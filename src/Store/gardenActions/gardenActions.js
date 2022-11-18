import moment from 'moment';
import { isToday } from '../../Components/Pure/PlantItemOfList';
import { config } from '../../Config/config';

export const plantAction = (state, action) => {
  //recibe state (to change) plant name(unic value) and field name to edit
  const plantFinded = state.plants.find(
    (p) => p.plant_name === action.payload.plant_name
  );
  if (!plantFinded) return null;
  const actualDateEvt = moment(
    plantFinded[action.payload.actualSchedule]['next_event']
  );
  const step = plantFinded[action.payload.actualSchedule]['step_repeat'];

  if (isToday(actualDateEvt) || moment().isAfter(actualDateEvt)) {
    plantFinded[action.payload.actualSchedule]['next_event'] =
      actualDateEvt.add(step, 'd');
  }
  plantFinded[action.payload.field_name] = moment().format(config.date_format);
  localStorage.setItem('garden', JSON.stringify(state.plants));
};
