import React from 'react';
import { withServiceWorkerUpdater } from '@3m1/service-worker-updater';

const Updater = (props) => {
  const { newServiceWorkerDetected, onLoadNewServiceWorkerAccept } = props;
  return newServiceWorkerDetected ? (
    <div className="bg-red-400 w-full h-4 ">
      New version detected.
      <button
        className="bg-red-800 text-neutral-100 "
        onClick={onLoadNewServiceWorkerAccept}
      >
        Update!
      </button>
    </div>
  ) : null; // If no update is available, render nothing
};

export default withServiceWorkerUpdater(Updater);
