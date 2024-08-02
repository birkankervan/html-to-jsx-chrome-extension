import MoonIcon from "../Icons/MoonIcon";
import SunIcon from "../Icons/SunIcon";

const Header = ({
  isDarkMode,
  setIsDarkMode,
}: {
  isDarkMode: boolean;
  setIsDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <header className="flex justify-between items-center p-4 bg-gray-100 dark:bg-gray-800 dark:text-white rounded-lg">
      <h1 className="text-xl font-bold">HTML to JSX Converter</h1>
      <button
        className="px-4 py-2 rounded dark:text-white"
        onClick={() => setIsDarkMode(!isDarkMode)}
      >
        {isDarkMode ? <SunIcon /> : <MoonIcon />}
      </button>
    </header>
  );
};

export default Header;
