import React from 'react';
import { createBrowserRouter, Outlet } from 'react-router-dom';
import FooterContainer from '../Components/Container/FooterContainer';
import EditPlant from './EditPlant/EditPlant';
import Garden from './Garden/Garden';
import NewPlant from './NewPlant/NewPlant';
import PlantPage from './PlantPage/PlantPage';
import TodayTasks from './TodayTasks/TodayTasks';

const LayOutSession = ({ children }) => {
  return (
    <>
      <div className="min-h-screen max-h-screen min-w-screen max-w-screen overflow-y-scroll pb-16">
        {children ? children : null}
      </div>
      <FooterContainer />
    </>
  );
};

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <LayOutSession>
        <Outlet />
      </LayOutSession>
    ),
    // loader: rootLoader,
    children: [
      {
        path: '/',
        element: <TodayTasks />,
      },
      {
        path: 'garden',
        element: <Outlet />,
        children: [
          {
            path: '',
            element: <Garden />,
          },
          {
            path: ':plant_id',
            element: <Outlet />,
            children: [
              {
                path: '',
                element: <PlantPage />,
              },
              {
                path: 'edit',
                element: <EditPlant />,
              },
            ],
          },
        ],
      },
      {
        path: 'add',
        element: <NewPlant />,
        // loader: teamLoader,
      },
    ],
  },
  // {
  //   path: '/garden',
  //   element: (
  //     <LayOutSession>
  //       <Garden />
  //     </LayOutSession>
  //   ),
  //   // loader: rootLoader,
  //   children: [
  //     {
  //       path: 'add',
  //       element: (
  //         <LayOutSession>
  //           <NewPlant />
  //         </LayOutSession>
  //       ),
  //       // loader: teamLoader,
  //     },
  //   ],
  // },
]);

export default router;
