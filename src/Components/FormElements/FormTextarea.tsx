import React from "react";
import { Controller } from "react-hook-form";
import { ClearTextButton } from "./ClearTextButton";
import { FormTextareaProps } from "./formTypes";

const FormTextarea: React.FC<FormTextareaProps> = ({
  name,
  control,
  placeholder,
}) => {
  return (
    <div className="relative w-full ">
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <>
            <textarea
              className="textarea textarea-bordered w-full h-40 p-2 border border-gray-300 rounded dark:bg-gray-800 dark:border-gray-600 dark:text-white"
              placeholder={placeholder}
              {...field}
              value={field.value as string}
            />
            <ClearTextButton
              value={field.value as string}
              onChange={field.onChange}
            />
          </>
        )}
      />
    </div>
  );
};

export default FormTextarea;
