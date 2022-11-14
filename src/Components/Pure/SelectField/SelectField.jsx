import React from 'react';
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  FormHelperText,
} from '@mui/material';

const SelectField = ({
  name,
  label,
  menuItems,
  value,
  handleChange,
  handleBlur,
  error,
  helperText,
}) => {
  return (
    <FormControl fullWidth error={error}>
      <InputLabel id="demo-simple-select-label">{label}</InputLabel>
      <Select
        variant="filled"
        labelId="demo-simple-select-label"
        value={value}
        label={label}
        name={name}
        onChange={handleChange}
        onBlur={handleBlur}
      >
        {menuItems &&
          menuItems?.map((item) => (
            <MenuItem key={Object.keys(item)} value={Object.keys(item)[0]}>
              {Object.values(item)}
            </MenuItem>
          ))}
      </Select>
      <FormHelperText>{helperText}</FormHelperText>
    </FormControl>
  );
};

export default SelectField;
