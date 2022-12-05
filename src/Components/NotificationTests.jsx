import React from 'react';

const NotificationTests = () => {
  //NOTIFICAION Api
  const notificationAPI = () => {
    const notification = new Notification('title', {
      body: 'ola',
      icon: '../apple-icon-180x180.png',
    });
  };
  // Sending a message to worker
  const msge = () => {
    console.log(navigator.serviceWorker.ready);
    navigator.serviceWorker.ready.then(() => {
      console.log('asd');
      navigator.serviceWorker.controller.postMessage({
        type: 'PUSH_MESSAGE',
        payload: { title: '', body: '' },
      });
    });
  };
  return (
    <>
      <div>NotificationTests</div>
      <div className="flex flex-col bg-slate-500 text-neutral-100">
        <button onClick={notificationAPI}>NOTIFICACION NATIVA WEB</button>
        <button onClick={msge}>MENSAJE - WORKER</button>
      </div>
    </>
  );
};

export default NotificationTests;
