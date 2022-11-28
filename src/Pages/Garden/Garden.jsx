import React from 'react';
import PlantItemOfList from '../../Components/Pure/PlantItemOfList';
//REDUX
import { useSelector, useDispatch } from 'react-redux';
import moment from 'moment';
import { Plant } from '../../Models/plant/plant.model';
const Garden = () => {
  const garden = useSelector((state) => state.garden);
  console.log(garden);

  return (
    <>
      <h3>Todas mis plantas </h3>
      <div className="flex flex-col gap-2 p-2">
        {garden
          ? garden?.plants?.map((p) => <PlantItemOfList plant={p} />)
          : 'Sin tareas'}
      </div>
    </>
  );
};

export default Garden;
