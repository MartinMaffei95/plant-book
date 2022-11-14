import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import NewPlant from './NewPlant/NewPlant';
import TodayTasks from './TodayTasks/TodayTasks';

const router = createBrowserRouter([
  {
    path: '/',
    element: <TodayTasks />,
    // loader: rootLoader,
    // children: [
    //   {
    //     path: 'add',
    //     element: <NewPlant />,
    //     // loader: teamLoader,
    //   },
    // ],
  },
  {
    path: '/add',
    element: <NewPlant />,
    // loader: rootLoader,
    // children: [
    //   {
    //     path: 'add',
    //     element: <NewPlant />,
    //     // loader: teamLoader,
    //   },
    // ],
  },
]);

export default router;
