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
  console.log(thisPlant);
  const initialValues = {
    plant_name: thisPlant?.plant_name,
    id: thisPlant?.id,
    plant_type: thisPlant?.plant_type?.name,
    planting_date: moment(thisPlant?.planting_date, config.date_format),
    harvest_date: moment(thisPlant?.harvest_date, config.date_format),
    assigned_color: thisPlant?.assigned_color,
    watered_schedule: thisPlant?.watered_schedule.id, //SchedulleObj
    prune_schedule: thisPlant?.prune_schedule.id, //SchedulleObj
    fertilization_schedule: thisPlant?.fertilization_schedule.id, //SchedulleObj
    insecticide_schedule: thisPlant?.insecticide_schedule.id, //SchedulleObj
    fungal_schedule: thisPlant?.fungal_schedule.id, //SchedulleObj
  };

  return (
    <div>
      <NewPlant initValues={initialValues} isEditing />
    </div>
  );
};

export default EditPlant;
