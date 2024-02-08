import "./App.css";
import Navigation from "./components/Navigation/Navigation";
import Landing from "./components/Landing/Landing";
import Footer from "./components/Footer/Footer";
import { createBrowserRouter } from "react-router-dom";
import Projects from "./components/Projects/Projects";
import { Persona } from "./components/Projects/Projects";
import { ParallaxBanner } from "react-scroll-parallax";
import { picsum } from "./components/Landing/Landing";

function App() {
  return (
    <>
      <header>
        <Navigation />
        <Landing />
      </header>
      <Persona />
      <ParallaxBanner
        className="bg-image aspect-[2/1]"
        style={{ height: "max-contents" }}
      >
        <div className="container-fluid">
          <Projects />
        </div>
      </ParallaxBanner>
      <Footer />
    </>
  );
}

const router = createBrowserRouter([{ path: "", element: <App /> }]);

export default router;
