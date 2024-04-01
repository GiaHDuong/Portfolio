import "./stylesheets/index.css";
import "./stylesheets/App.css";
import Navbar from "./components/Navbar";
import HamburgerNav from "./components/navbars/HamburgerNav";
import DesktopNav from "./components/navbars/DesktopNav";
import Profile from "./components/Profile";

function App() {
  return (
    <>
      <HamburgerNav />
      <DesktopNav />
      <Profile />
    </>
  );
}

export default App;
