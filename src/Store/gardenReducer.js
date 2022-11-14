import { createSlice } from '@reduxjs/toolkit';
import { Plant } from '../Models/plant/plant.model';
import { testGarden } from './testGarden';
import moment from 'moment';

const plantAction = (state, action) => {
  //recibe state (to change) plant name(unic value) and field name to edit
  const plantFinded = state.plants.find(
    (p) => p.plant_name === action.payload.plant_name
  );
  if (!plantFinded) return null;
  plantFinded[action.payload.field_name] = moment();
  localStorage.setItem('garden', JSON.stringify(state.plants));
};

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
});

export const { addPlant, caringPlant } = gardenSlice.actions;

export default gardenSlice.reducer;
