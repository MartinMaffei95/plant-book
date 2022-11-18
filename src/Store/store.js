import { configureStore } from '@reduxjs/toolkit';
import gardenReducer from './gardenReducer';

export default configureStore({
  reducer: {
    garden: gardenReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});
