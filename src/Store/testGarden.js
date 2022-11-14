import moment from 'moment';
import { Plant } from '../Models/plant/plant.model';

const ex1 = {
  plant_name: 'cactus Rojo',
  plant_type: 'Cactus',
  last_harvest: null,
  assigned_color: 'red',
  //
  last_watering: moment('2022-11-11'),
  last_prune: moment('2022-11-11'),
  last_fertilization: moment('2022-11-10'),
  last_application_of_insecticide: moment('2022-11-13'),
  last_application_of_fungicide: moment('2022-11-13'),
  //    schedules
  //   watered_schedule: '',
  //   prune_schedule: '',
  //   fertilization_schedule: '',
  //   insecticide_schedule: '',
  //   fungal_schedule: '',
};

const ex2 = {
  plant_name: 'Cactusiom Verderum',
  plant_type: 'Cactus',
  last_harvest: null,
  assigned_color: 'red',
  //
  last_watering: moment('2022-11-13'),
  last_prune: moment('2022-11-12'),
  last_fertilization: moment('2022-11-12'),
  last_application_of_insecticide: moment('2022-11-13'),
  last_application_of_fungicide: moment('2022-11-10'),
  //    schedules
  //   watered_schedule: '',
  //   prune_schedule: '',
  //   fertilization_schedule: '',
  //   insecticide_schedule: '',
  //   fungal_schedule: '',
};

export const testGarden = [new Plant(ex1), new Plant(ex2)];
