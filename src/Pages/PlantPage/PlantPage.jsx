import React, { useState } from 'react';
import { TbPlant } from 'react-icons/tb';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { AiFillSetting } from 'react-icons/ai';
import ScheduleGrid from '../../Components/Pure/ScheduleGrid/ScheduleGrid';
const PlantPage = () => {
  const { plant_id } = useParams();
  const plants = useSelector((state) => state.garden.plants);
  const [thisPlant, setThisPlant] = useState(
    plants?.find((p) => p?.id === plant_id)
  );
  const [schedule, setSchedule] = useState([
    {
      name: 'Poda',
      schedule: thisPlant?.prune_schedule,
      itsDoneToday: thisPlant?.last_prune,
    },
    {
      name: 'Riego',
      schedule: thisPlant?.watered_schedule,
      itsDoneToday: thisPlant?.last_watering,
    },
    {
      name: 'AntiHongos',
      schedule: thisPlant?.fungal_schedule,
      itsDoneToday: thisPlant?.last_application_of_fungicide,
    },
    {
      name: 'AntiPlagas',
      schedule: thisPlant?.insecticide_schedule,
      itsDoneToday: thisPlant?.last_application_of_insecticide,
    },
  ]);

  return (
    <>
      <div className="bg-green-600 flex w-screen h-36">
        <TbPlant className="h-full w-full" />
      </div>
      <div>
        <div className="flex justify-center items-center">
          {thisPlant && thisPlant?.plant_name}
          <button>
            <AiFillSetting />
          </button>
        </div>
        <div>
          <div>
            Fecha de plantacion:{' '}
            {thisPlant && thisPlant?.planting_date
              ? thisPlant?.planting_date
              : 'No definido'}
          </div>
          <div>
            Fecha de cosecha:{' '}
            {thisPlant && thisPlant?.harvest_date
              ? thisPlant?.harvest_date
              : 'No definido'}
          </div>
        </div>
        <ScheduleGrid scheduleArray={schedule} />
        <div>
          Mis notas
          <textarea />
        </div>
        <div className="flex flex-col items-center mt-2 pt-4 pb-4 text-mainColor-300 bg-gradient-to-b from-neutral-300 via-neutral-600 to-neutral-800">
          <div>Zona de peligro</div>
          <div className="flex items-center justify-around w-full">
            <div>Eliminar planta</div>
            <button className="border-2 rounded border-red-700 text-red-700 p-2">
              Eliminar
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default PlantPage;
