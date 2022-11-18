import React from 'react';
import PlantItemOfList from '../../Components/Pure/PlantItemOfList';
//REDUX
import { useSelector, useDispatch } from 'react-redux';
import moment from 'moment';
const Garden = () => {
  const garden = useSelector((state) => state.garden);

  //moment().add(2, 'd') adding two days to actual date
  console.log(moment().dayOfYear());
  //   var interval = moment('2016-12-31T08:00:00');
  //   console.log(interval.format());
  //   console.log(interval.add(1, 'month').endOf('month').format());
  //   console.log(interval.add(1, 'month').endOf('month').format());
  //   console.log(interval.add(1, 'month').endOf('month').format());
  //   console.log(interval.add(1, 'month').endOf('month').format());
  //   console.log(interval.add(1, 'month').endOf('month').format());
  //   console.log(interval.add(1, 'month').endOf('month').format());
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
