import { memo, useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { okaidia } from "react-syntax-highlighter/dist/esm/styles/prism";
import CopyIcon from "../Icons/CopyIcon";
import { NotificationComponent } from "../Notification/Notification";

interface OutputProps {
  jsxOutput: string;
}

const Output: React.FC<OutputProps> = memo(({ jsxOutput }) => {
  const [showNotification, setShowNotification] = useState<boolean>(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(jsxOutput).then(() => {
      setShowNotification(true);
      setTimeout(() => {
        setShowNotification(false);
      }, 2000);
    });
  };

  if (!jsxOutput) {
    return null;
  }

  return (
    <div className="relative output sm:-mt-2 sm:w-1/2 ">
      <button
        className="absolute top-2 right-2 text-slate-100 hover:text-orange-500 transition-all"
        onClick={handleCopy}
      >
        <CopyIcon />
      </button>
      <SyntaxHighlighter language="jsx" style={okaidia}>
        {jsxOutput}
      </SyntaxHighlighter>
      <NotificationComponent
        message="JSX output copied to clipboard!"
        show={showNotification}
      />
    </div>
  );
});

export default Output;
