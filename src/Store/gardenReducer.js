import { createSlice } from '@reduxjs/toolkit';
import { Plant } from '../Models/plant/plant.model';
import { plantAction } from './gardenActions/gardenActions';
import { testGarden } from './testGarden';

export const gardenSlice = createSlice({
  name: 'garden',
  initialState: {
    plants: JSON.parse(localStorage.getItem('garden')) || [],
  },
  reducers: {
    addPlant: (state, action) => {
      const newPlant = new Plant(action.payload);
      state.plants.push(newPlant);
      localStorage.setItem('garden', JSON.stringify(state.plants));
    },
    caringPlant: (state, action) => {
      //recibe the plant name(-unic value-) and change "last_watering" to today Date
      plantAction(state, action);
    },
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

export const { addPlant, caringPlant } = gardenSlice.actions;

export default gardenSlice.reducer;
