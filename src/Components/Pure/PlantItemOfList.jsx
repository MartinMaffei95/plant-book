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
import { useDispatch } from 'react-redux';

//moment
import { caringPlant } from '../../Store/gardenReducer';
import { Link } from 'react-router-dom';
import getColor from '../../utils/getColor';
import { isPending } from '../../utils/isPending';
import { isNonScheduled } from '../../utils/isNonScheduled';
import { isToday } from '../../utils/isToday';

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
    watered_schedule,
    fertilization_schedule,
    prune_schedule,
    insecticide_schedule,
    fungal_schedule,
  } = plant;
  const dispatch = useDispatch();

  //color
  console.log(isToday(last_watering));
  const { find, color } = getColor(assigned_color);
  return (
    <div className="flex flex-col bg-dominantColor-400 rounded-xl p-2 pl-3 relative overflow-hidden">
      <div
        className={`w-2 h-full inset-0 absolute `}
        style={{
          background: `${find ? color : ''}`,
        }}
      ></div>
      <div>
        <Link to={`/garden/${plant_name.toLowerCase()}`}>{plant_name}</Link>
      </div>
      {/* <div>{plant_type}</div> */}
      <div className="flex gap-2 justify-end">
        <Icon
          itsDoneToday={isToday(last_watering) ? true : false}
          isPending={isPending(last_watering, watered_schedule)}
          nonScheduled={isNonScheduled(watered_schedule)}
        >
          <GiWaterDrop
            onClick={() => {
              dispatch(
                caringPlant({
                  plant_name,
                  field_name: 'last_watering',
                  actualSchedule: 'watered_schedule',
                })
              );
            }}
          />
        </Icon>
        <Icon
          itsDoneToday={isToday(last_fertilization) ? true : false}
          isPending={isPending(last_fertilization, fertilization_schedule)}
          nonScheduled={isNonScheduled(fertilization_schedule)}
        >
          <GiFertilizerBag
            onClick={() => {
              dispatch(
                caringPlant({
                  plant_name,
                  field_name: 'last_fertilization',
                  actualSchedule: 'fertilization_schedule',
                })
              );
            }}
          />
        </Icon>
        <Icon
          itsDoneToday={isToday(last_prune) ? true : false}
          isPending={isPending(last_prune, prune_schedule)}
          nonScheduled={isNonScheduled(prune_schedule)}
        >
          <GiGardeningShears
            onClick={() => {
              dispatch(
                caringPlant({
                  plant_name,
                  field_name: 'last_prune',
                  actualSchedule: 'prune_schedule',
                })
              );
            }}
          />
        </Icon>
        <Icon
          itsDoneToday={isToday(last_application_of_insecticide) ? true : false}
          isPending={isPending(
            last_application_of_insecticide,
            insecticide_schedule
          )}
          nonScheduled={isNonScheduled(insecticide_schedule)}
        >
          <GiCentipede
            onClick={() => {
              dispatch(
                caringPlant({
                  plant_name,
                  field_name: 'last_application_of_insecticide',
                  actualSchedule: 'insecticide_schedule',
                })
              );
            }}
          />
        </Icon>
        <Icon
          itsDoneToday={isToday(last_application_of_fungicide) ? true : false}
          isPending={isPending(last_application_of_fungicide, fungal_schedule)}
          nonScheduled={isNonScheduled(fungal_schedule)}
        >
          <GiMushrooms
            onClick={() => {
              dispatch(
                caringPlant({
                  plant_name,
                  field_name: 'last_application_of_fungicide',
                  actualSchedule: 'fungal_schedule',
                })
              );
            }}
          />
        </Icon>
      </div>
    </div>
  );
};

export default PlantItemOfList;
