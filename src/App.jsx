import "./stylesheets/App.css";
import "./stylesheets/AppMediaQueries.css";
import DesktopNav from "./components/navbars/DesktopNav";
import HamburgerNav from "./components/navbars/HamburgerNav";
import Profile from "./components/Profile";
import About from "./components/About";
import Experience from "./components/Experience";
import FunFact from "./components/Funfact";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <DesktopNav />
      <HamburgerNav />
      <Profile />
      <About />
      <Experience />
      <FunFact />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
