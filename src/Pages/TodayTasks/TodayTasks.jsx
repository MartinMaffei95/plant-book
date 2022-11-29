import PlantItemOfList from '../../Components/Pure/PlantItemOfList';

//REDUX
import { useSelector } from 'react-redux';

import addNotification from 'react-push-notification';
import haveWorkToday from '../../utils/haveWorkToday';
import { useState } from 'react';

const TodayTasks = () => {
  const garden = useSelector((state) => state.garden.plants);
  const buttonClick = () => {
    addNotification({
      title: 'Warning',
      subtitle: 'This is a subtitle',
      message: 'This is a very long message',
      theme: 'darkblue',
      native: true, // when using native, your OS will handle theming.
    });
  };

  // const [filter, setFilter] = useState('all');

  // 2022-11-19T20:07:19.459Z
  console.log(garden);
  const [filter, setFilter] = useState('ALL');
  return (
    <>
      <h3>Tareas programadas para hoy: </h3>
      <div>
        <button className="bg-red-400 m-2 p-2" onClick={buttonClick}>
          Enviar notifications
        </button>
      </div>
      <select
        name="filter"
        onChange={(e) => {
          setFilter(e?.target?.value);
        }}
      >
        <option value="ALL">ALL</option>
        <option value="WATERING">WATERING</option>
        <option value="PRUNE">PRUNE</option>
        <option value="FERTILIZATION">FERTILIZATION</option>
        <option value="FUNGICIDE">FUNGICIDE</option>
        <option value="INSECTICIDE">INSECTICIDE</option>
      </select>
      <div className="flex flex-col gap-2 p-2">
        <div>
          {garden
            ? garden?.map((p) =>
                haveWorkToday(p) === null ? null : filter === 'ALL' ? (
                  <PlantItemOfList plant={haveWorkToday(p)?.plant} />
                ) : (
                  filter === haveWorkToday(p)?.workToDo && (
                    <PlantItemOfList plant={haveWorkToday(p)?.plant} />
                  )
                )
              )
            : 'Sin tareas'}
        </div>
      </div>
    </>
  );
};

export default TodayTasks;
