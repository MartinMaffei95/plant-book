import React from 'react';
import { colors } from '../Models/configs/colors.enum';
// import { colors } from '../../Models/configs/colors.enum';

const getColor = (assigned_color) => {
  const plantColor = colors.filter((c) => c[assigned_color]);
  if (plantColor) return { find: true, color: Object.values(plantColor[0])[0] };
  return { find: false, color: null };
};

export default getColor;
