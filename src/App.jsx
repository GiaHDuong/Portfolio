import "./stylesheets/App.css";
import "./stylesheets/AppMediaQueries.css";
import DesktopNav from "./components/navbars/DesktopNav";
import HamburgerNav from "./components/navbars/HamburgerNav";
import Profile from "./components/Profile";

function App() {
  return (
    <>
      <DesktopNav />
      <HamburgerNav />
      <Profile />
    </>
  );
}

export default App;
