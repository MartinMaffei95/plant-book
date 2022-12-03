import PlantItemOfList from '../../Components/Pure/PlantItemOfList';

//REDUX
import { useSelector } from 'react-redux';

import addNotification from 'react-push-notification';
import haveWorkToday from '../../utils/haveWorkToday';
import { useState } from 'react';

const TodayTasks = () => {
  const garden = useSelector((state) => state.garden.plants);
  const [notificationStatus, setNotificationStatus] = useState('');
  // const buttonClick = () => {
  //   addNotification({
  //     title: 'Warning',
  //     subtitle: 'This is a subtitle',
  //     message: 'This is a very long message',
  //     theme: 'darkblue',
  //     native: true, // when using native, your OS will handle theming.
  //   });
  // };

  function notifyMe() {
    if (!('Notification' in window)) {
      // Check if the browser supports notifications
      alert('This browser does not support desktop notification');
    } else if (Notification.permission === 'granted') {
      // Check whether notification permissions have already been granted;
      // if so, create a notification
      const notification = new Notification('Hi there!');
      // …
    } else if (Notification.permission !== 'denied') {
      // We need to ask the user for permission
      Notification.requestPermission().then((permission) => {
        // If the user accepts, let's create a notification
        if (permission === 'granted') {
          const notification = new Notification('Hi there!');
          // …
        }
      });
    }

    // At last, if the user has denied notifications, and you
    // want to be respectful there is no need to bother them anymore.
  }

  function checkNotificationPromise() {
    try {
      Notification.requestPermission().then();
    } catch (e) {
      return false;
    }

    return true;
  }

  function askNotificationPermission() {
    // función para pedir los permisos
    function handlePermission(permission) {
      // configura el botón para que se muestre u oculte, dependiendo de lo que
      // responda el usuario
      if (
        Notification.permission === 'denied' ||
        Notification.permission === 'default'
      ) {
        setNotificationStatus('denied');
      } else {
        setNotificationStatus('granted');
      }
    }

    // Comprobemos si el navegador admite notificaciones.
    if (!('Notification' in window)) {
      console.log('Este navegador no admite notificaciones.');
    } else {
      if (checkNotificationPromise()) {
        Notification.requestPermission().then((permission) => {
          handlePermission(permission);
        });
      } else {
        Notification.requestPermission(function (permission) {
          handlePermission(permission);
        });
      }
    }
  }

  // const [filter, setFilter] = useState('all');

  // 2022-11-19T20:07:19.459Z
  console.log(garden);
  const [filter, setFilter] = useState('ALL');

  function randomNotification() {
    var notifTitle = 'titleeee';
    var options = {
      body: 'bodi',
      // icon: notifImg,
    };
    var notif = new Notification(notifTitle, options);
    setTimeout(randomNotification, 3000);
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
      <div>
        {/* <button className="bg-red-400 m-2 p-2" onClick={buttonClick}>
          Enviar notifications
        </button> */}
        <button className="bg-red-400 m-2 p-2" onClick={notifyMe}>
          Notify me!
        </button>
      </div>
      <div>
        El usuario acepta notificaciones?
        <div>
          <button onClick={askNotificationPermission}>
            Habilitar notificaciones
          </button>
          {notificationStatus ===
          (
            <button onClick={askNotificationPermission}>
              Habilitar notificaciones
            </button>
          ) ? (
            'NO SE PREGUNTO AUN'
          ) : notificationStatus === 'granted' ? (
            'SI'
          ) : notificationStatus === 'denied' ? (
            <button onClick={askNotificationPermission}>
              Habilitar notificaciones
            </button>
          ) : null}
        </div>
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
