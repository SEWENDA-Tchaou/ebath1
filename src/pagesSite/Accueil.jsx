import HeaderAccueil from "../components/HeaderAccueil";
import AboutUs from "../components/AboutUs";
import Activities from "../components/Activities";
import Projects from "../components/Projects";
import TalkForUs from "../components/TalkForUs";
import Footer from "../components/Footer";

function Accueil() {
  return (
    <div className="bg-noir/5">
      <HeaderAccueil />
      <AboutUs />
      <Projects />
      <Activities />
      <TalkForUs />
      <Footer />
    </div>
  )
}

export default Accueil;
