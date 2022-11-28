import { isToday } from './isToday';

const haveWorkToday = (plant) => {
  //   if (!plant) return plant;
  const thisPlant = plant;

  if (thisPlant?.['watered_schedule']) {
    if (
      (isToday(thisPlant?.['watered_schedule']['next_event']) ||
        isToday(thisPlant?.['watered_schedule']['init_date'])) &&
      !isToday(thisPlant?.['last_watering'])
    ) {
      return { plant: thisPlant, workToDo: 'WATERING' };
    }
  }
  if (thisPlant?.['prune_schedule']) {
    if (
      (isToday(thisPlant?.['prune_schedule']['next_event']) ||
        isToday(thisPlant?.['prune_schedule']['init_date'])) &&
      !isToday(thisPlant?.['last_prune'])
    ) {
      return { plant: thisPlant, workToDo: 'PRUNE' };
    }
  }

  if (thisPlant?.['fertilization_schedule']) {
    if (
      (isToday(thisPlant?.['fertilization_schedule']['next_event']) ||
        isToday(thisPlant?.['fertilization_schedule']['init_date'])) &&
      !isToday(thisPlant?.['last_fertilization'])
    ) {
      return { plant: thisPlant, workToDo: 'FERTILIZATION' };
    }
  }

  if (thisPlant?.['fungal_schedule']) {
    if (
      (isToday(thisPlant?.['fungal_schedule']['next_event']) ||
        isToday(thisPlant?.['fungal_schedule']['init_date'])) &&
      !isToday(thisPlant?.['last_application_of_fungicide'])
    ) {
      return { plant: thisPlant, workToDo: 'FUNGICIDE' };
    }
  }
  if (thisPlant?.['insecticide_schedule']) {
    if (
      (isToday(thisPlant?.['insecticide_schedule']['next_event']) ||
        isToday(thisPlant?.['insecticide_schedule']['init_date'])) &&
      !isToday(thisPlant?.['last_application_of_insecticide'])
    ) {
      return { plant: thisPlant, workToDo: 'INSECTICIDE' };
    }
  }

  return null;
};

export default haveWorkToday;
