import GithubIcon from "../Icons/GithubIcon";
import LinkedinIcon from "../Icons/Linkedin";

const Footer = () => {
  return (
    <footer className="flex justify-center gap-x-2">
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
    </footer>
  );
};

export default Footer;
