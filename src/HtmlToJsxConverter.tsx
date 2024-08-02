import React, { lazy, useState } from "react";
import HtmlToJSXForm from "./Components/FormElements/Form";

const Output = lazy(() => import("./Components/Output/Output"));

const HtmlToJsxConverter: React.FC = () => {
  const [jsxOutput, setJsxOutput] = useState<string>("");

  return (
    <div className="p-4 mx-auto">
      <HtmlToJSXForm setJsxOutput={setJsxOutput} />
      <Output jsxOutput={jsxOutput} />
    </div>
  );
};

export default HtmlToJsxConverter;
