import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import HtmlToJsxConverter from "./HtmlToJsxConverter";

function App() {
  return (
    <div className="container w-[25rem] p-1">
      <Header />
      <HtmlToJsxConverter />
      <Footer />
    </div>
  );
}

export default App;
