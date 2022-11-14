import React from 'react';

const Icon = ({ off, children }) => {
  return (
    <div
      className={`${
        off ? 'bg-slate-400' : 'bg-slate-50'
      } w-8 h-8 text-xl flex justify-center items-center rounded-xl`}
    >
      {children}
    </div>
  );
};

export default Icon;
