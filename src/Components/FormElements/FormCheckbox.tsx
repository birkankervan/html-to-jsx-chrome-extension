import React from "react";
import { Controller } from "react-hook-form";
import { FormCheckboxProps } from "./formTypes";

const FormCheckbox: React.FC<FormCheckboxProps> = ({
  name,
  control,
  label,
}) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <label className="flex items-center space-x-2 dark:text-white">
          <input
            type="checkbox"
            {...field}
            value={field.value as string}
            className="dark:bg-gray-800 dark:border-gray-600"
          />
          <span>{label}</span>
        </label>
      )}
    />
  );
};

export default FormCheckbox;
