import "./footer.css";
import gm from "/src/assets/icons/gmail.png";
import gh from "/src/assets/icons/gh.png";
import {
  FaGithub,
  FaGithubAlt,
  FaLinkedin,
  FaLinkedinIn,
  FaPhone,
} from "react-icons/fa6";
import { SiGmail } from "react-icons/si";
import { FaPhoneAlt } from "react-icons/fa";
export function Footer() {
  return (
    <footer id="footer" className="p-3 pt-0">
      <section id="contact" className="mb-3 text-center">
        <div className="">
          <h5>Let's make something great together</h5>
        </div>
        <div className="">
          <a
            href="mailto:cs.kelly.nesh@gmail.com?subject=Let's talk"
            className="btn btn-primary text-capitalize"
          >
            contact me
          </a>
        </div>
      </section>
      <div className="row pt-sm-3">
        <div className="col-3 py-3 gap-2 h4">
          <a href="https://github.com/Kelly-Nesh">
            <FaGithub className="icon" />
          </a>
          <a href="https://www.linkedin.com/in/kelly-munene">
            <FaLinkedin className="icon" />
          </a>
          <a href="mailto:munenekelly001@gmail.com">
            <SiGmail className="icon" />
          </a>
          <a href="tel:+254115510325">
            <FaPhoneAlt className="icon" />
          </a>
        </div>
        <div className="col-9 col-sm-6 text-center align-self-center">
          <h4>Kelly Munene || Leetech</h4>
          &copy; 2024 <a href="https://leetech.top">leetech.top</a>. All rights
          reserved.
        </div>
      </div>
    </footer>
  );
}
