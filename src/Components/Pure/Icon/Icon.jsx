import React from 'react';

const Icon = ({ off, isPending, nonScheduled, children }) => {
  return (
    <div
      className={`${off ? 'bg-mainColor-300' : 'bg-mainColor-400'} ${
        isPending === true ? 'animate-pulse bg-accentColor-200' : ''
      } ${
        nonScheduled ? 'opacity-50 pointer-events-none' : ''
      } w-8 h-8 text-xl flex justify-center items-center rounded-xl pointer-events-all`}
    >
      {children}
    </div>
  );
};

export default Icon;
