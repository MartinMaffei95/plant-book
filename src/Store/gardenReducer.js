import { createSlice } from '@reduxjs/toolkit';
import { Plant } from '../Models/plant/plant.model';
import { plantAction } from './gardenActions/gardenActions';
import { testGarden } from './testGarden';

export const gardenSlice = createSlice({
  name: 'garden',
  initialState: {
    plants: testGarden || [],
  },
  reducers: {
    addPlant: (state, action) => {
      const newPlant = new Plant(action.payload);
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
