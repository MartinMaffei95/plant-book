import React from 'react';
import { TextField } from '@mui/material';
import SelectField from '../../Components/Pure/SelectField/SelectField';
import ColorPicker from '../../Components/Pure/ColorPicker/ColorPicker';
import { useFormik } from 'formik';
//REDUX
import { useDispatch } from 'react-redux';
import { addPlant, editPlant } from '../../Store/gardenReducer';

import { types } from '../../Models/configs/types.enum';
// import { schedulles } from '../../Models/configs/schedulles.enum';
import * as Yup from 'yup';
import moment from 'moment/moment';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import { baseSchedules } from '../../Models/schedule/baseSchedules';
import { useNavigate, useParams } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

const NewPlant = ({ initValues = null, isEditing = false }) => {
  const { plant_id } = useParams();
  const schedulles = baseSchedules;
  const initialValues = initValues || {
    plant_name: '',
    plant_type: '',
    id: uuidv4(),
    planting_date: moment(),
    harvest_date: moment(),
    assigned_color: '',
    watered_schedule: schedulles[0]?.id, //SchedulleObj
    prune_schedule: schedulles[0]?.id, //SchedulleObj
    fertilization_schedule: schedulles[0]?.id, //SchedulleObj
    insecticide_schedule: schedulles[0]?.id, //SchedulleObj
    fungal_schedule: schedulles[0]?.id, //SchedulleObj
  };

  const handleDate = (valueName, date) => {
    setFieldValue(valueName, date);
  };
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onSubmit = (e) => {
    if (isEditing) {
      dispatch(
        editPlant({
          plant_id: plant_id,
          plant: values,
        })
      );
      navigate(`/garden/${plant_id}`);
    } else {
      dispatch(addPlant(values));
      setFieldValue('assigned_color', '');
      resetForm();
      navigate(`/garden`);
    }
  };

  const errMsg = {
    required: 'Este campo es requerido',
  };

  const validationSchema = Yup.object().shape({
    plant_name: Yup.string().required(errMsg.required),
    plant_type: Yup.string().required(errMsg.required),
    assigned_color: Yup.string().required(errMsg.required),
    watered_schedule: Yup.string().required(errMsg.required),
    prune_schedule: Yup.string().required(errMsg.required),
    fertilization_schedule: Yup.string().required(errMsg.required),
  });

  const formik = useFormik({ initialValues, validationSchema, onSubmit });
  const {
    values,
    errors,
    touched,
    handleSubmit,
    handleBlur,
    handleChange,
    setFieldValue,
    resetForm,
  } = formik;

  return (
    <>
      <h3>Agreguemos una planta nueva</h3>
      <div className="p-4">
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <TextField
            label="El nombre de tu planta"
            variant="filled"
            name={'plant_name'}
            onChange={handleChange}
            value={values?.plant_name}
            fullWidth
            //error
            error={errors.plant_name && touched.plant_name ? true : false}
            helperText={
              errors.plant_name && touched.plant_name
                ? errors.plant_name
                : false
            }
          />
          <SelectField
            isType
            name={'plant_type'}
            value={values?.plant_type}
            handleChange={handleChange}
            handleBlur={handleBlur}
            menuItems={types}
            label={'Tipo de planta'}
            setFieldValue={setFieldValue}
            //error
            error={errors.plant_type && touched.plant_type ? true : false}
            helperText={
              errors.plant_type && touched.plant_type
                ? errors.plant_type
                : false
            }
          />
          {/* <div className="bg-white m-2 p-2">color picker here</div> */}
          <SelectField
            isEditing={isEditing ? true : null}
            name={'watered_schedule'}
            value={values?.watered_schedule}
            handleChange={handleChange}
            handleBlur={handleBlur}
            menuItems={schedulles}
            label={'Riego'}
            setFieldValue={setFieldValue}
            //error
            error={
              errors.watered_schedule && touched.watered_schedule ? true : false
            }
            helperText={
              errors.watered_schedule && touched.watered_schedule
                ? errors.watered_schedule
                : false
            }
          />
          <SelectField
            isEditing={isEditing ? true : null}
            name={'prune_schedule'}
            value={values?.prune_schedule}
            handleChange={handleChange}
            handleBlur={handleBlur}
            menuItems={schedulles}
            label={'Podas'}
            setFieldValue={setFieldValue}
            //error
            error={
              errors.prune_schedule && touched.prune_schedule ? true : false
            }
            helperText={
              errors.prune_schedule && touched.prune_schedule
                ? errors.prune_schedule
                : false
            }
          />
          <SelectField
            isEditing={isEditing ? true : null}
            name={'fertilization_schedule'}
            value={values?.fertilization_schedule}
            handleChange={handleChange}
            handleBlur={handleBlur}
            menuItems={schedulles}
            label={'Fertilizaciones'}
            setFieldValue={setFieldValue}
            //error
            error={
              errors.fertilization_schedule && touched.fertilization_schedule
                ? true
                : false
            }
            helperText={
              errors.fertilization_schedule && touched.fertilization_schedule
                ? errors.fertilization_schedule
                : false
            }
          />
          <SelectField
            isEditing={isEditing ? true : null}
            name={'insecticide_schedule'}
            value={values?.insecticide_schedule}
            handleChange={handleChange}
            handleBlur={handleBlur}
            menuItems={schedulles}
            label={'Anti plagas'}
            setFieldValue={setFieldValue}
            //error
            error={
              errors.insecticide_schedule && touched.insecticide_schedule
                ? true
                : false
            }
            helperText={
              errors.insecticide_schedule && touched.insecticide_schedule
                ? errors.insecticide_schedule
                : false
            }
          />
          <SelectField
            isEditing={isEditing ? true : null}
            name={'fungal_schedule'}
            value={values?.fungal_schedule}
            handleChange={handleChange}
            handleBlur={handleBlur}
            menuItems={schedulles}
            label={'Anti hongos'}
            setFieldValue={setFieldValue}
            //error
            error={
              errors.fungal_schedule && touched.fungal_schedule ? true : false
            }
            helperText={
              errors.fungal_schedule && touched.fungal_schedule
                ? errors.fungal_schedule
                : false
            }
          />
          {/* <SelectField menuItems={schedulles} label={'Tratamiento insecticida'} />
        <SelectField menuItems={schedulles} label={'Tratamiento fungico'} /> */}
          Color
          <ColorPicker
            name={'assigned_color'}
            value={values?.assigned_color}
            handleChange={handleChange}
            handleBlur={handleBlur}
            setFieldValue={setFieldValue}
          />
          {/* <LocalizationProvider dateAdapter={AdapterMoment}>
            <MobileDatePicker
              label="Fecha de plantaci??n"
              inputFormat="MM/DD/YYYY"
              value={values?.planting_date}
              onChange={(e) => handleDate('planting_date', e)}
              renderInput={(params) => <TextField {...params} />}
            />

            <MobileDatePicker
              label="Fecha de cosecha"
              inputFormat="MM/DD/YYYY"
              value={values?.harvest_date}
              onChange={(e) => handleDate('harvest_date', e)}
              renderInput={(params) => <TextField {...params} />}
            />
          </LocalizationProvider> */}
          <button
            className="bg-dominantColor-300 p-2 m-2 rounded flex justify-center items-center text-mainColor-300"
            type="submit"
          >
            Guardar{' '}
          </button>
        </form>
      </div>
    </>
  );
};

export default NewPlant;
