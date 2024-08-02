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
        <label className="flex items-center space-x-2">
          <input type="checkbox" {...field} value={field.value as string} />
          <span>{label}</span>
        </label>
      )}
    />
  );
};

export default FormCheckbox;
