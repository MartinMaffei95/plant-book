import React from 'react';
import './style/index.css';
import { RouterProvider } from 'react-router-dom';
import router from './Pages/router';

import { schedulles } from './Models/configs/schedulles.enum';
import Updater from './Components/Updater/Updater';
import { useSelector } from 'react-redux';
import { isToday } from './utils/isToday';
import { sendNotification } from './utils/sendNotification';
function App() {
  localStorage.setItem('schedules', JSON.stringify(schedulles));

  const plants = useSelector((state) => state.garden.plants);
  for (let i = 0; i < plants.length; i++) {
    const plant = plants[i];
    if (
      plant?.watered_schedule &&
      isToday(plant?.watered_schedule?.next_event)
    ) {
      sendNotification(
        plant?.plant_name,
        `${plant?.plant_name} necesita ser regada`
      );
    }
    if (plant?.prune_schedule && isToday(plant?.prune_schedule?.next_event)) {
      sendNotification(
        plant?.plant_name,
        `${plant?.plant_name} necesita ser podada`
      );
    }
    if (
      plant?.fertilization_schedule &&
      isToday(plant?.fertilization_schedule?.next_event)
    ) {
      sendNotification(
        plant?.plant_name,
        `${plant?.plant_name} necesita ser fertilizada`
      );
    }
    if (
      plant?.insecticide_schedule &&
      isToday(plant?.insecticide_schedule?.next_event)
    ) {
      sendNotification(
        plant?.plant_name,
        `${plant?.plant_name} necesita insecticida `
      );
    }
    if (plant?.fungal_schedule && isToday(plant?.fungal_schedule?.next_event)) {
      sendNotification(
        plant?.plant_name,
        `${plant?.plant_name} necesita fungicida `
      );
    }
  }

  return (
    <div className="min-h-screen max-h-full min-w-screen max-w-screen text-2xl text-slate-900 bg-mainColor-400">
      <Updater />
      {/* ## ROUTER ## */}
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
