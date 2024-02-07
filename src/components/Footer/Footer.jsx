import React from "react";
import { Link } from "react-router-dom";
import "./footer.css";
const Footer = () => {
  return (
    <footer id="contact">
      <div className="d-flex justify-content-center py-3">
        <i className="fab fa-github"></i>
        <i className="fab fa-linkedin-in"></i>
        <i className="far fa-envelope"></i>
        <i
          role="button"
          className="fas fa-phone"
          onClick={async () => {
            await navigator.clipboard.writeText("+254115510325");
            alert("Phone number copied!");
          }}
        ></i>
      </div>
      <div className="d-flex justify-content-center py-3">
        <span>
          &copy; 2024 Copyright:&nbsp; <Link to="leetech.top">Leetech.top</Link>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
