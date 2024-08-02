import { memo } from "react";
import ClearIcon from "../Icons/ClearIcon";

interface ClearTextButtonProps {
  onChange: (value: string) => void;
  value: string;
}

export const ClearTextButton: React.FC<ClearTextButtonProps> = memo(
  ({ onChange, value }) => {
    if (!value) return null;

    return (
      <button
        type="button"
        className="absolute top-3 right-5 text-slate-800 dark:text-slate-200 hover:text-orange-500 dark:hover:text-orange-400 transition-all"
        onClick={() => onChange("")}
      >
        <ClearIcon />
      </button>
    );
  }
);
