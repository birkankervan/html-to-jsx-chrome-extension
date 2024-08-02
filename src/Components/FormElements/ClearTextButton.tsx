import { memo } from "react";
import ClearIcon from "../Icons/ClearIcon";

export const ClearTextButton = memo(
  ({
    onChange,
    value,
  }: {
    onChange: (value: string) => void;
    value: string;
  }) => {
    if (!value) return null;

    return (
      <button
        type="button"
        className="absolute top-3 right-5 text-slate-800  hover:text-orange-500 transition-all"
        onClick={() => onChange("")}
      >
        <ClearIcon />
      </button>
    );
  }
);
