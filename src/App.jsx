import "./stylesheets/App.css";
import "./stylesheets/AppMediaQueries.css";
import DesktopNav from "./components/navbars/DesktopNav";
import HamburgerNav from "./components/navbars/HamburgerNav";

function App() {
  return (
    <>
      <DesktopNav />
      <HamburgerNav />
    </>
  );
}

export default App;
