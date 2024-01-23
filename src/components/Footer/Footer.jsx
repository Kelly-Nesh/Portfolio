import React from "react";
import { Link } from "react-router-dom";
import "./footer.css";
const Footer = () => {
  return (
    <footer>
      <div className="d-flex justify-content-center py-3">
        <i class="fab fa-github"></i>
        <i class="fab fa-linkedin-in"></i>
        <i class="far fa-envelope"></i>
        <i class="fas fa-phone"></i>
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
