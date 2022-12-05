export const sendNotification = (title = '', body = '') => {
  navigator.serviceWorker.controller.postMessage({
    type: 'PUSH_MESSAGE',
    payload: {
      title,
      body,
    },
  });
};
