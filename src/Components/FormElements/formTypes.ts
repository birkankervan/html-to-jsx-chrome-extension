import { Control } from "react-hook-form";

export type HTMLToJSXFormData = {
  htmlInput: string;
  isReactComponent: boolean;
  componentName: string;
  exportType: "default" | "named";
  useMemo: boolean;
};

export interface FormTextareaProps {
  name: keyof HTMLToJSXFormData;
  control: Control<HTMLToJSXFormData>;
  placeholder: string;
}

export interface FormCheckboxProps {
  name: keyof HTMLToJSXFormData;
  control: Control<HTMLToJSXFormData>;
  label: string;
}

export interface FormInputProps {
  name: keyof HTMLToJSXFormData;
  control: Control<HTMLToJSXFormData>;
  placeholder: string;
}

export interface FormSelectProps {
  name: keyof HTMLToJSXFormData;
  control: Control<HTMLToJSXFormData>;
  options: { value: string; label: string }[];
}
