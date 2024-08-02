import React from "react";
import { Controller } from "react-hook-form";
import { FormSelectProps } from "./formTypes";

const FormSelect: React.FC<FormSelectProps> = ({ name, control, options }) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <select
          className="input input-bordered p-2 border border-gray-300 rounded"
          {...field}
          value={field.value as string}
        >
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      )}
    />
  );
};

export default FormSelect;
