import "./App.css";
import Navigation from "./components/Navigation/Navigation";
import Landing from "./components/Landing/Landing";
import Footer from "./components/Footer/Footer";
import { createBrowserRouter } from "react-router-dom";
import Projects from "./components/Projects/Projects";

function App() {
  return (
    <>
      <header>
        <Navigation />
        <Landing />
      </header>
      <main>
        <div className="container">
          <Projects />
        </div>
      </main>
      <Footer />
    </>
  );
}

const router = createBrowserRouter([{ path: "", element: <App /> }]);

export default router;
