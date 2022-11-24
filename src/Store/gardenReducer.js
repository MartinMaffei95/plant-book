import { createSlice } from '@reduxjs/toolkit';
import { Plant } from '../Models/plant/plant.model';
import { plantAction } from './gardenActions/gardenActions';
import { testGarden } from './testGarden';
const schedulles = JSON.parse(localStorage.getItem('schedules'));

export const gardenSlice = createSlice({
  name: 'garden',
  initialState: {
    plants: testGarden || [],
  },
  reducers: {
    addPlant: (state, action) => {
      let plantObj = action.payload;
      console.log(plantObj.watered_schedule);

      // ··watered_schedule;

      if (plantObj.watered_schedule === 'PERSONALIZED') {
        const temporal_watered_schedule = JSON.parse(
          localStorage.getItem('temporal_watered_schedule')
        );
        plantObj.watered_schedule = temporal_watered_schedule;
      } else {
        const schedule = schedulles.find((sch) => sch.id === plantObj.id);
        plantObj.watered_schedule = schedule;
      }
      // ··prune_schedule;

      if (plantObj.prune_schedule === 'PERSONALIZED') {
        const temporal_prune_schedule = JSON.parse(
          localStorage.getItem('temporal_prune_schedule')
        );
        plantObj.prune_schedule = temporal_prune_schedule;
      } else {
        const schedule = schedulles.find((sch) => sch.id === plantObj.id);
        plantObj.prune_schedule = schedule;
      }
      // ·· fertilization_schedule;
      if (plantObj.fertilization_schedule === 'PERSONALIZED') {
        const temporal_fertilization_schedule = JSON.parse(
          localStorage.getItem('temporal_fertilization_schedule')
        );
        plantObj.fertilization_schedule = temporal_fertilization_schedule;
      } else {
        const schedule = schedulles.find((sch) => sch.id === plantObj.id);
        plantObj.fertilization_schedule = schedule;
      }
      // ·· insecticide_schedule;
      if (plantObj.insecticide_schedule === 'PERSONALIZED') {
        const temporal_insecticide_schedule = JSON.parse(
          localStorage.getItem('temporal_insecticide_schedule')
        );
        plantObj.insecticide_schedule = temporal_insecticide_schedule;
      } else {
        const schedule = schedulles.find((sch) => sch.id === plantObj.id);
        plantObj.insecticide_schedule = schedule;
      }
      // ·· fungal_schedule;
      if (plantObj.fungal_schedule === 'PERSONALIZED') {
        const temporal_fungal_schedule = JSON.parse(
          localStorage.getItem('temporal_fungal_schedule')
        );
        plantObj.fungal_schedule = temporal_fungal_schedule;
      } else {
        const schedule = schedulles.find((sch) => sch.id === plantObj.id);
        plantObj.fungal_schedule = schedule;
      }

      const newPlant = new Plant(plantObj);
      state.plants.push(newPlant);
      localStorage.setItem('garden', JSON.stringify(state.plants));
    },
    caringPlant: (state, action) => {
      const caredPlant = plantAction(state, action);
      console.log(caredPlant);
      return {
        ...state,
        plants: [...caredPlant],
      };
    },
  },
});

export const { addPlant, caringPlant } = gardenSlice.actions;

export default gardenSlice.reducer;
