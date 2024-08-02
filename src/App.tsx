import { useEffect, useState } from "react";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import HtmlToJsxConverter from "./HtmlToJsxConverter";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  return (
    <div className="container w-[25rem] p-1  dark:bg-gray-900 dark:text-white">
      <Header isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
      <HtmlToJsxConverter />
      <Footer />
    </div>
  );
}

export default App;
