import React from 'react';
import './style/index.css';
import { RouterProvider } from 'react-router-dom';
import router from './Pages/router';

import { Notifications } from 'react-push-notification';
function App() {
  return (
    <div className="min-h-screen max-h-full min-w-screen max-w-screen text-2xl text-slate-900 bg-emerald-100">
      {/* ## ROUTER ## */}
      <Notifications />
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
