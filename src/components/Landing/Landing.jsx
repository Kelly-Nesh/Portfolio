import React from "react";
import { Link } from "react-router-dom";
import "./landing.css";
import { Parallax, ParallaxBanner } from "react-scroll-parallax";
import { MDBNavbarLink } from "mdb-react-ui-kit";
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
            <MDBNavbarLink
              active
              href="#contact"
              className="c-button mx-auto btn btn-rounded btn-md btn-outline-secondary"
              style={{
                fontSize: "medium",
                background: "rgba(0, 0, 0, 0.7)",
                width: "10rem",
                color: "#b6b0a6",
              }}
            >
              Contact me
            </MDBNavbarLink>
          </Parallax>
          <div className="position-absolute" style={{ bottom: "1rem" }}>
            <MDBNavbarLink active href="#projects" className="text-color ">
              <i className="fas fa-angle-down mt-3 d-block text-center display-6"></i>
            </MDBNavbarLink>
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
