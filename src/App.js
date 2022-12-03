import React from 'react';
import './style/index.css';
import { RouterProvider } from 'react-router-dom';
import router from './Pages/router';

import { Notifications } from 'react-push-notification';
import FooterContainer from './Components/Container/FooterContainer';
import { schedulles } from './Models/configs/schedulles.enum';

import { withServiceWorkerUpdater } from '@3m1/service-worker-updater';

function App(props) {
  const { newServiceWorkerDetected, onLoadNewServiceWorkerAccept } = props;
  localStorage.setItem('schedules', JSON.stringify(schedulles));

  return (
    <div className="min-h-screen max-h-full min-w-screen max-w-screen text-2xl text-slate-900 bg-mainColor-400">
      {/* ## ROUTER ## */}
      {/* <Notifications /> */}
      {newServiceWorkerDetected ? (
        <div>
          Tenemos una nueva version. Instalala con click aca.{' '}
          <button onClick={onLoadNewServiceWorkerAccept}>Update!</button>
        </div>
      ) : null}
      <RouterProvider router={router} />
    </div>
  );
}

export default withServiceWorkerUpdater(App);
