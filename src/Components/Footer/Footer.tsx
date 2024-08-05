import GithubIcon from "../Icons/GithubIcon";
import LinkedinIcon from "../Icons/Linkedin";

const Footer = () => {
  return (
    <footer className="flex justify-center gap-x-2 items-center p-4 bg-gray-100 dark:bg-gray-800 dark:text-white mb-3 rounded-lg">
      <a
        href="https://github.com/birkankervan/html-to-jsx-chrome-extension"
        target="_blank"
        rel="noopener noreferrer"
      >
        <GithubIcon />
      </a>
      <a
        href="https://www.producthunt.com/posts/html-to-jsx-converter?embed=true&utm_source=badge-featured&utm_medium=badge&utm_souce=badge-html-to-jsx-converter"
        target="_blank"
      >
        <img
          src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=476506&theme=neutral"
          alt="HTML to JSX Converter - Easily convert HTML to JSX website and chrome extension | Product Hunt"
          className="w-36"
          width="250"
          height="54"
          loading="lazy"
        />
      </a>
      <a
        href="https://www.buymeacoffee.com/ebirkan"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png"
          alt="Buy Me A Coffee"
          height={20}
          className="w-28"
          loading="lazy"
        />
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
