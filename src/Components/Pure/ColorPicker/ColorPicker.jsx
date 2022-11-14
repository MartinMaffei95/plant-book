import React from 'react';
import { useState } from 'react';
import { colors } from '../../../Models/configs/colors';
import ColorCircle from '../../Molecules/ColorCircle/ColorCircle';

const ColorPicker = ({ setFieldValue }) => {
  const [colorPicked, setColorPicked] = useState('');
  const selectColor = (value) => {
    setColorPicked(value[0]);
    setFieldValue('assigned_color', value[0]);
  };

  return (
    <div className="bg-slate-200 flex flex-wrap justify-around p-2 gap-2 rounded">
      {colors &&
        colors?.map((col) => (
          <ColorCircle
            color={Object.values(col)}
            selected={colorPicked}
            key={Object.keys(col)}
            value={Object.keys(col)}
            handleClick={selectColor}
          />
        ))}
    </div>
  );
};

export default ColorPicker;
