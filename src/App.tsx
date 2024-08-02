import GithubIcon from "./Components/Icons/GithubIcon";
import LinkedinIcon from "./Components/Icons/Linkedin";
import HtmlToJsxConverter from "./HtmlToJsxConverter";

function App() {
  return (
    <div className="container w-[25rem] p-1">
      <HtmlToJsxConverter />
      <div className="flex justify-center gap-x-2">
        <a
          href="https://github.com/birkankervan/html-to-jsx-chrome-extension"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GithubIcon />
        </a>
        <a
          href="https://www.linkedin.com/in/emre-birkan-kervan"
          target="_blank"
          rel="noopener noreferrer"
        >
          <LinkedinIcon />
        </a>
      </div>
    </div>
  );
}

export default App;
