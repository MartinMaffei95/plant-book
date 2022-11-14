import React from 'react';
import NewPlant from '../../Pages/NewPlant/NewPlant';
import TodayTasks from '../../Pages/TodayTasks/TodayTasks';

const MainScreenContainer = () => {
  return (
    <div className="flex flex-col p-2  gap-2">
      <NewPlant />
    </div>
  );
};

export default MainScreenContainer;
