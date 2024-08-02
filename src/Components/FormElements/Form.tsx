import React from "react";
import { useForm } from "react-hook-form";
import { convertHTMLtoJSX } from "../../utils/htmlToJsx";
import {
  getComponentCode,
  getExportStatement,
  getMemoCode,
} from "../../utils/utils";
import FormCheckbox from "./FormCheckbox";
import FormInput from "./FormInput";
import FormSelect from "./FormSelect";
import FormTextarea from "./FormTextarea";
import { HTMLToJSXFormData } from "./formTypes";

const HtmlToJSXForm = ({
  setJsxOutput,
}: {
  setJsxOutput: React.Dispatch<React.SetStateAction<string>>;
}) => {
  const { control, handleSubmit, watch } = useForm<HTMLToJSXFormData>({
    defaultValues: {
      htmlInput: "",
      isReactComponent: false,
      componentName: "MyComponent",
      exportType: "default",
      useMemo: false,
    },
  });

  const onSubmit = (data: HTMLToJSXFormData) => {
    let jsx = convertHTMLtoJSX(data.htmlInput);

    if (data.isReactComponent) {
      const componentName = data.componentName || "MyComponent";
      const componentCode = getComponentCode(componentName, jsx);
      const memoCode = getMemoCode(componentName, data.useMemo);
      const exportStatement = getExportStatement(
        componentName,
        data.exportType,
        data.useMemo
      );

      jsx = `${componentCode}\n\n${memoCode}${exportStatement}`;
    }

    setJsxOutput(jsx);
  };

  const isReactComponent = watch("isReactComponent");

  return (
    <form
      className="flex flex-col sm:w-1/2 gap-2  dark:bg-gray-900 dark:text-white"
      onSubmit={handleSubmit(onSubmit)}
    >
      <FormCheckbox
        name="isReactComponent"
        control={control}
        label="Return as React Component"
      />
      {isReactComponent && (
        <>
          <FormInput
            name="componentName"
            control={control}
            placeholder="Component Name"
          />
          <FormSelect
            name="exportType"
            control={control}
            options={[
              { value: "default", label: "default export" },
              { value: "named", label: "named export" },
            ]}
          />
          <FormCheckbox
            name="useMemo"
            control={control}
            label="Wrap with React.memo"
          />
        </>
      )}
      <FormTextarea
        name="htmlInput"
        control={control}
        placeholder="Enter HTML here..."
      />

      <button
        className="btn btn-primary mb-4 mt-2 px-4 py-2 bg-blue-500 text-white rounded dark:bg-blue-700"
        type="submit"
      >
        Convert to JSX
      </button>
    </form>
  );
};

export default HtmlToJSXForm;
