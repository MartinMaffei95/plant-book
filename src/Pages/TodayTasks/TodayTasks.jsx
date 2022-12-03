import PlantItemOfList from '../../Components/Pure/PlantItemOfList';

//REDUX
import { useSelector } from 'react-redux';

import addNotification from 'react-push-notification';
import haveWorkToday from '../../utils/haveWorkToday';
import { useState } from 'react';

const TodayTasks = () => {
  const garden = useSelector((state) => state.garden.plants);
  const [notificationStatus, setNotificationStatus] = useState('');

  // const [filter, setFilter] = useState('all');

  const [filter, setFilter] = useState('ALL');

  function randomNotification() {
    var notifTitle = 'titleeee';
    var options = {
      body: 'bodi',
      // icon: notifImg,
    };
    var notif = new Notification(notifTitle, options);
    console.log(notif);
    // setTimeout(randomNotification, 3000);
  }

  function sendNotif(e) {
    Notification.requestPermission().then(function (result) {
      if (result === 'granted') {
        randomNotification();
      }
    });
  }

  return (
    <>
      <h3>Tareas programadas para hoy: </h3>
      <div>
        <button onClick={sendNotif}>Notificarrrrr</button>
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
