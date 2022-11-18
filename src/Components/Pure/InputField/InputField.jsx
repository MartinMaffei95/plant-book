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
      <div className="flex justify-center">
        <div>
          <div className="form-floating mb-3 xl:w-96">
            <input
              type="email"
              className="form-control
      block
      w-full
      px-3
      py-1.5
      text-base
      font-normal
      text-gray-700
      bg-white bg-clip-padding
      border border-solid border-gray-300
      rounded
      transition
      ease-in-out
      m-0
      focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              name="floatingInput"
              placeholder="name@example.com"
            />
            <label htmlFor="floatingInput" className="text-gray-700">
              Email address
            </label>
          </div>
        </div>
      </div>
      {/* <label className="" htmlFor={fieldName}>
        {label}
      </label>
      <input
        className="bg-transparent border-b border-black border-solid outline-transparent "
        name={fieldName}
        placeholder={placeholder}
        value={inputValue}
        onChange={handleChange}
        onBlur={handleBlur}
      /> */}
    </div>
  );
};

// <div class="flex justify-center">
//   <div>
//     <div class="form-floating mb-3 xl:w-96">
//       <input type="email" class="form-control
//       block
//       w-full
//       px-3
//       py-1.5
//       text-base
//       font-normal
//       text-gray-700
//       bg-white bg-clip-padding
//       border border-solid border-gray-300
//       rounded
//       transition
//       ease-in-out
//       m-0
//       focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="floatingInput" placeholder="name@example.com"/>
//       <label for="floatingInput" class="text-gray-700">Email address</label>
//     </div>
//     <div class="form-floating mb-3 xl:w-96">
//       <input type="password" class="form-control
//       block
//       w-full
//       px-3
//       py-1.5
//       text-base
//       font-normal
//       text-gray-700
//       bg-white bg-clip-padding
//       border border-solid border-gray-300
//       rounded
//       transition
//       ease-in-out
//       m-0
//       focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="floatingPassword" placeholder="Password"/>
//       <label for="floatingPassword" class="text-gray-700">Password</label>
//     </div>
//   </div>
// </div>
export default InputField;
