import React from 'react';
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  FormHelperText,
} from '@mui/material';
import PersonalizedSchedule from './PersonalizedSchedule/PersonalizedSchedule';
import { ID_PERSONALIZED } from '../../../Models/schedule/shcedulesId';

const SelectField = ({
  isEditing,
  isType,
  name,
  label,
  menuItems,
  value,
  handleChange,
  handleBlur,
  error,
  helperText,
  setFieldValue,
}) => {
  return (
    <>
      <FormControl fullWidth error={error} className="overflow-visible">
        <InputLabel id="demo-simple-select-label">{label}</InputLabel>
        <Select
          variant="filled"
          labelId="demo-simple-select-label"
          value={value}
          defaultValue={value}
          label={label}
          name={name}
          onChange={handleChange}
          onBlur={handleBlur}
        >
          {menuItems &&
            menuItems?.map((item) => (
              <MenuItem key={item?.id} value={item?.id}>
                {item?.name}
              </MenuItem>
            ))}
          {isType ? null : (
            <MenuItem key={ID_PERSONALIZED} value={ID_PERSONALIZED}>
              {'PERSONALIZADO'}
            </MenuItem>
          )}
        </Select>
        <FormHelperText>{helperText}</FormHelperText>
      </FormControl>
      {value === ID_PERSONALIZED ? (
        <PersonalizedSchedule
          isEditing={isEditing ? true : null}
          valueName={name}
          setFieldValue={setFieldValue}
        />
      ) : null}
    </>
  );
};

export default SelectField;
