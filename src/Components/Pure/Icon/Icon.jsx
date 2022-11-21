import React from 'react';

const Icon = ({ itsDoneToday, isPending, nonScheduled, children }) => {
  return (
    <div
      className={`${itsDoneToday ? 'bg-mainColor-400' : 'bg-mainColor-500'} ${
        isPending === true ? 'animate-pulse bg-accentColor-300' : ''
      } ${
        nonScheduled ? 'opacity-20 pointer-events-none' : ''
      } w-8 h-8 text-xl flex justify-center items-center rounded-xl pointer-events-all`}
    >
      {children}
    </div>
  );
};

export default Icon;
