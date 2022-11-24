import moment from 'moment';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { config } from '../../Config/config';
import NewPlant from '../NewPlant/NewPlant';

const EditPlant = () => {
  const { plant_id } = useParams();
  const plants = useSelector((state) => state?.garden?.plants);
  const [thisPlant, setThisPlant] = useState(
    plants?.find((p) => p?.id === plant_id)
  );
  const initialValues = {
    plant_name: thisPlant?.plant_name,
    plant_type: thisPlant?.plant_type?.name,
    planting_date: moment(thisPlant?.planting_date, config.date_format),
    harvest_date: moment(thisPlant?.harvest_date, config.date_format),
    assigned_color: thisPlant?.assigned_color,
    watered_schedule: thisPlant?.watered_schedule, //SchedulleObj
    prune_schedule: thisPlant?.prune_schedule, //SchedulleObj
    fertilization_schedule: thisPlant?.fertilization_schedule, //SchedulleObj
    insecticide_schedule: thisPlant?.insecticide_schedule, //SchedulleObj
    fungal_schedule: thisPlant?.fungal_schedule, //SchedulleObj
  };

  return (
    <div>
      <NewPlant initValues={initialValues} />
    </div>
  );
};

export default EditPlant;
