import React from "react";
import { Link } from "react-router-dom";
import "./footer.css";
import { CopyToClipboard } from "react-copy-to-clipboard";

const Footer = () => {
  return (
    <footer id="contact">
      <div className="d-flex justify-content-center py-3">
        <Link
          to="https://github.com/Kelly-Nesh"
          className="text-decoration-none"
        >
          <i className="fab fa-github" />
        </Link>
        <Link
          to="https://www.linkedin.com/in/kelly-munene"
          className="text-decoration-none"
        >
          <i className="fab fa-linkedin-in" />
        </Link>
        <Link
          to="mailto:munenekelly001@gmail.com"
          className="text-decoration-none"
        >
          <i className="far fa-envelope" />
        </Link>
        <CopyToClipboard
          text="+254115510325"
          onCopy={() => alert("Phone number copied to clipboard.")}
        >
          <i className="fas fa-phone"></i>
        </CopyToClipboard>
      </div>
      <div className="d-flex justify-content-center py-3">
        <span>
          &copy; 2024:&nbsp; <Link to="https://leetech.top">leetech.top</Link>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
