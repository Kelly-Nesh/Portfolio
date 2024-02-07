import "./App.css";
import Navigation from "./components/Navigation/Navigation";
import Landing from "./components/Landing/Landing";
import Footer from "./components/Footer/Footer";
import { createBrowserRouter } from "react-router-dom";
import Projects from "./components/Projects/Projects";
import { Persona } from "./components/Projects/Projects";
import { Parallax } from "react-scroll-parallax";

function App() {
  return (
    <>
      <header>
        <Navigation />
        <Landing />
      </header>
      <Parallax
        translateX={["-100%", "0%"]}
        rootMargin={{ top: 100, bottom: 100 }}
        scale={[0.75, 1]}
        easing="ease"
      >
        <h1 className="text-center">Welcome to my website</h1>
      </Parallax>
      <main>
        <div className="container">
          <Projects />
        </div>
        <Persona />
      </main>
      <Footer />
    </>
  );
}

const router = createBrowserRouter([{ path: "", element: <App /> }]);

export default router;
