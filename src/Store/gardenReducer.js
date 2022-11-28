import { createSlice } from '@reduxjs/toolkit';
import { Plant } from '../Models/plant/plant.model';
import { baseSchedules } from '../Models/schedule/baseSchedules';
import { ID_EVEN_TWO_DAYS } from '../Models/schedule/shcedulesId';
import {
  createPersonalizedSchedule,
  editPlantAction,
  plantAction,
} from './gardenActions/gardenActions';
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

      const newPlant = new Plant(createPersonalizedSchedule(plantObj));
      state.plants.push({ ...newPlant });
      localStorage.setItem('garden', JSON.stringify(state.plants));
    },
    editPlant: (state, action) => {
      const editedPlant = editPlantAction(state, action);
      void {
        ...state,
        plants: [...editedPlant],
      };
    },

    caringPlant: (state, action) => {
      const caredPlant = plantAction(state, action);
      void {
        ...state,
        plants: [...caredPlant],
      };
    },
  },
});

export const { addPlant, editPlant, caringPlant } = gardenSlice.actions;

export default gardenSlice.reducer;
