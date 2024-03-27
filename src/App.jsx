import "./stylesheets/App.css";
import "./stylesheets/AppMediaQueries.css";
import DesktopNav from "./components/navbars/DesktopNav";
import HamburgerNav from "./components/navbars/HamburgerNav";
import Profile from "./components/Profile";
import About from "./components/About";
import Experience from "./components/Experience";

function App() {
  return (
    <>
      <DesktopNav />
      <HamburgerNav />
      <Profile />
      <About />
      <Experience />
    </>
  );
}

export default App;
