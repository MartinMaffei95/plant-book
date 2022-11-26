import { createSlice } from '@reduxjs/toolkit';
import { Plant } from '../Models/plant/plant.model';
import { baseSchedules } from '../Models/schedule/baseSchedules';
import { ID_EVEN_TWO_DAYS } from '../Models/schedule/shcedulesId';
import { plantAction } from './gardenActions/gardenActions';
import { testGarden } from './testGarden';
const garden = localStorage.getItem('garden')
  ? JSON.parse(localStorage.getItem('garden'))
  : [];

export const gardenSlice = createSlice({
  name: 'garden',
  initialState: {
    plants: garden || [],
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
        const schedule = baseSchedules.find(
          (sch) => sch.id === plantObj.watered_schedule
        );
        console.log(schedule);

        plantObj.watered_schedule = schedule;
      }
      // ··prune_schedule;

      if (plantObj.prune_schedule === 'PERSONALIZED') {
        const temporal_prune_schedule = JSON.parse(
          localStorage.getItem('temporal_prune_schedule')
        );
        plantObj.prune_schedule = temporal_prune_schedule;
      } else {
        const schedule = baseSchedules.find(
          (sch) => sch.id === plantObj.prune_schedule
        );
        console.log(schedule);

        plantObj.prune_schedule = schedule;
      }
      // ·· fertilization_schedule;
      if (plantObj.fertilization_schedule === 'PERSONALIZED') {
        const temporal_fertilization_schedule = JSON.parse(
          localStorage.getItem('temporal_fertilization_schedule')
        );
        plantObj.fertilization_schedule = temporal_fertilization_schedule;
      } else {
        const schedule = baseSchedules.find(
          (sch) => sch.id === plantObj.fertilization_schedule
        );
        console.log(schedule);

        plantObj.fertilization_schedule = schedule;
      }
      // ·· insecticide_schedule;
      if (plantObj.insecticide_schedule === 'PERSONALIZED') {
        const temporal_insecticide_schedule = JSON.parse(
          localStorage.getItem('temporal_insecticide_schedule')
        );

        plantObj.insecticide_schedule = temporal_insecticide_schedule;
      } else {
        const schedule = baseSchedules.find(
          (sch) => sch.id === plantObj.insecticide_schedule
        );
        console.log(schedule);

        plantObj.insecticide_schedule = schedule;
      }
      // ·· fungal_schedule;
      if (plantObj.fungal_schedule === 'PERSONALIZED') {
        const temporal_fungal_schedule = JSON.parse(
          localStorage.getItem('temporal_fungal_schedule')
        );

        plantObj.fungal_schedule = temporal_fungal_schedule;
      } else {
        const schedule = baseSchedules.find(
          (sch) => sch.id === plantObj.fungal_schedule
        );
        console.log(schedule);

        plantObj.fungal_schedule = schedule;
      }
      // localStorage.removeItem('temporal_fungal_schedule');
      // localStorage.removeItem('temporal_insecticide_schedule');
      // localStorage.removeItem('temporal_fertilization_schedule');
      // localStorage.removeItem('temporal_prune_schedule');
      // localStorage.removeItem('temporal_watered_schedule');

      const newPlant = new Plant(plantObj);
      state.plants.push(newPlant);
      localStorage.setItem('garden', JSON.stringify(state.plants));
    },
    caringPlant: (state, action) => {
      const caredPlant = plantAction(state, action);
      return {
        ...state,
        plants: [...caredPlant],
      };
    },
  },
});

export const { addPlant, caringPlant } = gardenSlice.actions;

export default gardenSlice.reducer;
