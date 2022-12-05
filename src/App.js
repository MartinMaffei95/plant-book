import React from 'react';
import './style/index.css';
import { RouterProvider } from 'react-router-dom';
import router from './Pages/router';

import { Notifications } from 'react-push-notification';
import FooterContainer from './Components/Container/FooterContainer';
import { schedulles } from './Models/configs/schedulles.enum';
import Updater from './Components/Updater/Updater';
function App() {
  localStorage.setItem('schedules', JSON.stringify(schedulles));

  console.log(navigator.serviceWorker.ready);
  navigator.serviceWorker.ready.then(() => {
    console.log('asd');
    navigator.serviceWorker.controller.postMessage({
      type: 'MENSAJE',
    });
  });

  return (
    <div className="min-h-screen max-h-full min-w-screen max-w-screen text-2xl text-slate-900 bg-mainColor-400">
      <Updater />
      {/* ## ROUTER ## */}
      {/* <Notifications /> */}
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
