import React from 'react';
import PlantItemOfList from '../../Components/Pure/PlantItemOfList';
import { Link } from 'react-router-dom';
//REDUX
import { useSelector, useDispatch } from 'react-redux';
const TodayTasks = () => {
  const garden = useSelector((state) => state.garden);
  // console.log(garden?.plants);
  return (
    <>
      <h3>Tareas para hoy: </h3>
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
