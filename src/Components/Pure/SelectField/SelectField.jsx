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
    <FormControl fullWidth error={error} className="overflow-visible">
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
            <MenuItem key={Object.keys(item)[0]} value={Object.values(item)[0]}>
              {Object.values(item)[0]?.name}
            </MenuItem>
          ))}
      </Select>
      <FormHelperText>{helperText}</FormHelperText>
    </FormControl>
  );
};

export default SelectField;
