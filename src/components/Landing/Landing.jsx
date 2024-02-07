import React, { useRef } from "react";
import { Link } from "react-router-dom";
import "./landing.css";

const Landing = () => {
  const ref = useRef();
  return (
    <div
      className="vh-100 bg-image"
      style={{
        backgroundImage:
          "url('https://mdbcdn.b-cdn.net/img/new/fluid/city/018.jpg')",
      }}
    >
      <div className="mask" style={{ backgroundColor: "hsla(0, 0%, 0%, 0.5)" }}>
        <div className="container d-flex justify-content-center align-items-center h-100">
          <div className="text-color landing-text">
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
          </div>
          <div className="position-absolute" style={{ bottom: "1rem" }}>
            <span
              to="#projects"
              data-mdb-ripple-init
              className="text-color display-6"
              ref={ref}
              onClick={() => {
                ref.current.scrollIntoView();
              }}
            >
              <i className="fas fa-angle-down mt-3 d-block text-center"></i>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
