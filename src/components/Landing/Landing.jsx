import React from "react";
import { Link } from "react-router-dom";
import "./landing.css";
import { Parallax, ParallaxBanner } from "react-scroll-parallax";

const Landing = () => {
  return (
    <ParallaxBanner
      className="vh-100 bg-image aspect-[2/1]"
      layers={[
        {
          image: picsum(),
          speed: -20,
        },
      ]}
    >
      <div className="mask" style={{ backgroundColor: "hsla(0, 0%, 0%, 0.5)" }}>
        <div className="container d-flex justify-content-center align-items-center h-100">
          <Parallax
            className="text-color landing-text"
            scale={[0.75, 1]}
            easing="ease"
          >
            <h1 className="mb-2 display-5 name">Kelly Munene</h1>
            <h4 className="mb-4 display-2 title-font">Software Engineer</h4>
            <Link
              to="#contact"
              data-mdb-ripple-init
              className="text-color btn btn-rounded btn-md  btn-outline-secondary"
              role="button"
              style={{
                fontSize: "medium",
                background:
                  "linear-gradient(45deg, hsla(0, 0%, 0%, 0.9), hsla(0, 0%, 80%, 0.1))",
              }}
            >
              Contact me
            </Link>
          </Parallax>
          <div className="position-absolute" style={{ bottom: "1rem" }}>
            <span
              to="#projects"
              data-mdb-ripple-init
              className="text-color display-6"
            >
              <i className="fas fa-angle-down mt-3 d-block text-center"></i>
            </span>
          </div>
        </div>
      </div>
    </ParallaxBanner>
  );
};

export default Landing;

export const picsum = (id = 0, dim = 3500, blur = null) => {
  return `https://picsum.photos/id/${id}/${dim}${blur ? "?blur=" + blur : ""}`;
};
