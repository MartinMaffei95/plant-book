import React from 'react';
import './style/index.css';
import { RouterProvider } from 'react-router-dom';
import router from './Pages/router';

function App() {
  return (
    <div className="min-h-screen max-h-full min-w-screen max-w-screen bg-green-300 text-2xl ">
      {/* ## ROUTER ## */}
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
