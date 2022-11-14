import React from 'react';
import { TextField } from '@mui/material';

const InputField = ({
  label,
  placeholder,
  fieldName,
  inputValue,
  handleChange,
  handleBlur,
}) => {
  return (
    <div className="text-lg flex flex-col border-0 p-2">
      <label className="" htmlFor={fieldName}>
        {label}
      </label>
      <input
        className="bg-transparent border-b border-black border-solid outline-transparent "
        name={fieldName}
        placeholder={placeholder}
        value={inputValue}
        onChange={handleChange}
        onBlur={handleBlur}
      />
    </div>
  );
};

export default InputField;
