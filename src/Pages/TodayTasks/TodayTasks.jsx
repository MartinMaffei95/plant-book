import React from 'react';
import PlantItemOfList from '../../Components/Pure/PlantItemOfList';
import { Link } from 'react-router-dom';
//REDUX
import { useSelector, useDispatch } from 'react-redux';

import addNotification from 'react-push-notification';

const TodayTasks = () => {
  const garden = useSelector((state) => state.garden);
  const buttonClick = () => {
    addNotification({
      title: 'Warning',
      subtitle: 'This is a subtitle',
      message: 'This is a very long message',
      theme: 'darkblue',
      native: true, // when using native, your OS will handle theming.
    });
  };
  return (
    <>
      <h3>Tareas para hoy: </h3>
      <button onClick={buttonClick} className="button">
        Hello world.
      </button>
      <Link to="add">Crear</Link>
      <div className="flex flex-col gap-2 p-2">
        {garden
          ? garden?.plants?.map((p) => <PlantItemOfList plant={p} />)
          : 'Sin tareas'}
      </div>
    </>
  );
};

export default TodayTasks;
