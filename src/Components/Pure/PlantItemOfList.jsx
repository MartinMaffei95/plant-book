import React from 'react';
//icons
import {
  GiWaterDrop,
  GiFertilizerBag,
  GiCentipede,
  GiMushrooms,
  GiGardeningShears,
} from 'react-icons/gi';
import Icon from './Icon/Icon';

//REDUX
import { useDispatch, useSelector } from 'react-redux';

//moment
import moment from 'moment';
import { caringPlant } from '../../Store/gardenReducer';
import { colors } from '../../Models/configs/colors.enum';

const PlantItemOfList = ({ plant }) => {
  const {
    plant_name,
    plant_type,
    assigned_color,
    last_watering,
    last_fertilization,
    last_application_of_insecticide,
    last_application_of_fungicide,
    last_prune,
  } = plant;

  const dispatch = useDispatch();

  const isToday = (date) => {
    const today = moment();
    // console.log(moment());
    if (date === null) return false;
    if (moment(date).isSame(moment(), 'day')) {
      return true;
    } else return false;
  };

  //color
  const plantColor = colors.filter((c) => c[assigned_color]);
  return (
    <div className="flex flex-col bg-green-700 rounded-xl p-2 pl-3 relative overflow-hidden">
      <div
        className={`w-2 h-full inset-0 absolute `}
        style={{
          background: `${plantColor ? Object.values(plantColor[0])[0] : ''}`,
        }}
      ></div>
      <div>{plant_name}</div>
      <div>{plant_type}</div>
      <div className="flex gap-2 justify-end">
        <Icon off={isToday(last_watering) ? false : true}>
          <GiWaterDrop
            onClick={() => {
              dispatch(
                caringPlant({ plant_name, field_name: 'last_watering' })
              );
            }}
          />
        </Icon>
        <Icon off={isToday(last_fertilization) ? false : true}>
          <GiFertilizerBag
            onClick={() => {
              dispatch(
                caringPlant({ plant_name, field_name: 'last_fertilization' })
              );
            }}
          />
        </Icon>
        <Icon off={isToday(last_application_of_insecticide) ? false : true}>
          <GiCentipede
            onClick={() => {
              dispatch(
                caringPlant({
                  plant_name,
                  field_name: 'last_application_of_insecticide',
                })
              );
            }}
          />
        </Icon>
        <Icon off={isToday(last_application_of_fungicide) ? false : true}>
          <GiMushrooms
            onClick={() => {
              dispatch(
                caringPlant({
                  plant_name,
                  field_name: 'last_application_of_fungicide',
                })
              );
            }}
          />
        </Icon>
        <Icon off={isToday(last_prune) ? false : true}>
          <GiGardeningShears
            onClick={() => {
              dispatch(caringPlant({ plant_name, field_name: 'last_prune' }));
            }}
          />
        </Icon>
      </div>
    </div>
  );
};

export default PlantItemOfList;
