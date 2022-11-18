import React from 'react';
import { Link } from 'react-router-dom';
import { TbPlant } from 'react-icons/tb';
import { GoTasklist } from 'react-icons/go';
const FooterContainer = () => {
  return (
    <div className="bg-neutral-800 text-white fixed bottom-0 min-w-full flex justify-around items-center gap-4 h-16 test z-50">
      <div>
        <Link to="/">
          <GoTasklist />
        </Link>
      </div>
      <div>
        <Link
          to="/garden"
          className="relative flex justify-center items-center overflow-visible"
        >
          <TbPlant className="absolute right-2 scale-110" />
          <TbPlant className="absolute scale-150" />
          <TbPlant className="absolute left-2 scale-125" />
        </Link>
      </div>
      <div>
        <Link
          to="/add"
          className="relative flex justify-center items-center h-8 w-8 overflow-visible"
        >
          <span className="absolute bottom-1/2 right-2/3">+</span>
          <TbPlant />
        </Link>
      </div>
    </div>
  );
};

export default FooterContainer;
