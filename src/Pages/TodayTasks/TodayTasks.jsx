import React from 'react';
import PlantItemOfList, {
  isToday,
} from '../../Components/Pure/PlantItemOfList';
//REDUX
import { useSelector, useDispatch } from 'react-redux';

import addNotification from 'react-push-notification';
import moment from 'moment';

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
      {/* <button onClick={buttonClick} className="button">
        Notification TEST
      </button> */}
      <div className="flex flex-col gap-2 p-2">
        <div>
          Todas
          {garden
            ? garden?.plants?.map(
                // (p) => <PlantItemOfList plant={p} />
                (p) =>
                  (isToday(p?.['watered_schedule']['next_event']) ||
                    isToday(p?.['watered_schedule']['init_date'])) &&
                  !isToday(p?.['last_watering']) ? (
                    <PlantItemOfList plant={p} />
                  ) : null
              )
            : 'Sin tareas'}
        </div>
        {/* <div>
          Poda
          {garden
            ? garden?.plants?.map((p) => <PlantItemOfList plant={p} />)
            : 'Sin tareas'}
        </div>
        <div>
          Fertilizar
          {garden
            ? garden?.plants?.map((p) => <PlantItemOfList plant={p} />)
            : 'Sin tareas'}
        </div> */}
      </div>
    </>
  );
};

export default TodayTasks;
