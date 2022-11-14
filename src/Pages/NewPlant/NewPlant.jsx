import React from 'react';
import { TextField } from '@mui/material';
import SelectField from '../../Components/Pure/SelectField/SelectField';
import ColorPicker from '../../Components/Pure/ColorPicker/ColorPicker';
import { useFormik } from 'formik';
//REDUX
import { useDispatch } from 'react-redux';
import { addPlant } from '../../Store/gardenReducer';

import { Link } from 'react-router-dom';

const types = [
  { CACTUS: 'Cactus' },
  { SUCULENT: 'Suculenta' },
  { AROMATIC: 'Aromatica' },
  { FLOWER: 'Flores' },
  { TREE: 'Árbol' },
];
const schedulles = [
  { EVERY_DAY: 'Todos los dias' },
  { TWO_DAYS: 'Cada dos dias' },
  { EVERY_TWO_DAYS: 'Cada semana' },
  { PERSONALIZED: 'Personalizado' },
  { PERSONAL_SCHEDULE: 'Usar cronograma personalizado' },
];

const NewPlant = () => {
  const initialValues = {
    plant_name: '',
    plant_type: '',
    assigned_color: '',
    watered_schedule: '',
    prune_schedule: '',
    fertilization_schedule: '',
  };
  const dispatch = useDispatch();

  const onSubmit = (e) => {
    console.log(values);
    dispatch(addPlant(values));
  };

  const formik = useFormik({ initialValues, onSubmit });
  const { values, handleSubmit, handleBlur, handleChange, setFieldValue } =
    formik;

  return (
    <>
      <h3>Agreguemos una planta nueva</h3>
      <Link to="/">Home</Link>

      <form onSubmit={handleSubmit} className="flex flex-col gap-2">
        <TextField
          label="El nombre de tu planta"
          variant="filled"
          name={'plant_name'}
          onChange={handleChange}
          value={values?.plant_name}
          fullWidth
        />
        <SelectField
          name={'plant_type'}
          value={values?.plant_type}
          handleChange={handleChange}
          handleBlur={handleBlur}
          menuItems={types}
          label={'Tipo de planta'}
        />

        {/* <div className="bg-white m-2 p-2">color picker here</div> */}
        <ColorPicker
          name={'assigned_color'}
          value={values?.assigned_color}
          handleChange={handleChange}
          handleBlur={handleBlur}
          setFieldValue={setFieldValue}
        />

        <SelectField
          name={'watered_schedule'}
          value={values?.watered_schedule}
          handleChange={handleChange}
          handleBlur={handleBlur}
          menuItems={schedulles}
          label={'Riego'}
        />
        <SelectField
          name={'prune_schedule'}
          value={values?.prune_schedule}
          handleChange={handleChange}
          handleBlur={handleBlur}
          menuItems={schedulles}
          label={'Podas'}
        />
        <SelectField
          name={'fertilization_schedule'}
          value={values?.fertilization_schedule}
          handleChange={handleChange}
          handleBlur={handleBlur}
          menuItems={schedulles}
          label={'Fertilizaciones'}
        />
        {/* <SelectField menuItems={schedulles} label={'Tratamiento insecticida'} />
        <SelectField menuItems={schedulles} label={'Tratamiento fungico'} /> */}
        <button type="submit"> Guardar </button>
      </form>
    </>
  );
};

export default NewPlant;
