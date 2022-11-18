import React, { useState } from 'react';
import { TbPlant } from 'react-icons/tb';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
const PlantPage = () => {
  const { plant_id } = useParams();
  const plants = useSelector((state) => state.garden.plants);
  console.log(plants.find((p) => p.id === plant_id));
  const [thisPlant, setThisPlant] = useState(
    plants?.find((p) => p?.id === plant_id)
  );
  // console.log(plant_id);
  const cronograma = [
    {
      enable: false,
      action: 'riego',
      cada: 2,
      proximo: '10/10/2010',
      ok: true,
    },
    {
      enable: true,
      action: 'fertilizado',
      cada: 6,
      proximo: '10/10/2010',
      ok: true,
    },
    { enable: true, action: 'poda', cada: 4, proximo: '10/10/2010', ok: false },
    {
      enable: false,
      action: 'antiHongo',
      cada: 5,
      proximo: '10/10/2010',
      ok: false,
    },
  ];
  return (
    <>
      <div className="bg-green-600 flex w-screen h-36">
        <TbPlant className="h-full w-full" />
      </div>
      <div>
        <div>{thisPlant && thisPlant?.plant_name}</div>

        <div>
          Ficha tecnica.
          <div>Fecha de plantacion</div>
          <div>Fecha de cosecha ?</div>
        </div>

        <div className="grid grid-cols-4 auto-rows-auto gap-2 text-sm">
          <h3 className="col-start-1 col-end-5 bg-pink-400">Cronograma</h3>
          {!cronograma
            ? null
            : cronograma?.map((row) =>
                !row?.enable ? (
                  <>
                    <div className="bg-slate-600 col-start-1 col-end-2">
                      {row?.action}
                    </div>
                    <div className="bg-slate-600 col-start-2 col-end-5">
                      Quieres inciar esta accion?
                    </div>
                  </>
                ) : (
                  <>
                    <div className="bg-slate-600">{row?.action}</div>
                    <div className="bg-slate-600">{row?.cada}</div>
                    <div className="bg-slate-600">{row?.proximo}</div>
                    <div className="bg-slate-600">{row?.ok}</div>
                  </>
                )
              )}
        </div>
        <div>
          Mis notas
          <textarea />
        </div>
      </div>
    </>
  );
};

export default PlantPage;
