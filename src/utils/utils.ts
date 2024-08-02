import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export const cn = (...inputs: ClassValue[]) => twMerge(clsx(inputs));

export const getComponentCode = (
  componentName: string,
  jsx: string
): string => {
  return `const ${componentName} = () => (\n  ${jsx.replace(
    /\n/g,
    "\n  "
  )}\n);`;
};

export const getMemoCode = (
  componentName: string,
  useMemo: boolean
): string => {
  return useMemo
    ? `const Memoized${componentName} = React.memo(${componentName});\n`
    : "";
};

export const getExportStatement = (
  componentName: string,
  exportType: string,
  useMemo: boolean
): string => {
  if (exportType === "default") {
    return useMemo
      ? `export default Memoized${componentName};`
      : `export default ${componentName};`;
  } else {
    return useMemo
      ? `export { Memoized${componentName} as ${componentName} };`
      : `export { ${componentName} };`;
  }
};
