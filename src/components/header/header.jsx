import "./header.css";
import { FaPhoneAlt } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { Spacer } from "../../components/spacer_divider/spacer"
import me from "/src/assets/me.jpg"
import gm from "/src/assets/icons/gmail.png"


export function Header() {
  return (
    <header className="">
      <div className="contact">
        <div className="py-1">
          <span className="px-2 py-1">
            <a href="tel:+254115510325">
              <FaPhoneAlt className="mx-1"/>
              +254115510325
            </a>
          </span>
          <span className="px-2 py-1">
            <a href="mailto:munenekelly001@gmail.com">
              <img src={gm} className="icon me-1"/>
              munenekelly001@gmail.com
            </a>
          </span>
        </div>
        <hr className="hr m-0 position-absolute" />
      </div>
      <nav className="py-1 px-2">
        <div className="nav-brand d-inline-block">
          <h2>
            <a href="/">Leetech</a>
          </h2>
        </div>
        <div className="nav-links d-inline-block">
          <span>
            <a href="#">Home</a>
          </span>
          <span>
            <a href="#about">About</a>
          </span>
          <span>
            <a href="#work">Services</a>
          </span>
          <span>
            <a href="#contact">Contact</a>
          </span>
        </div>
      </nav>
      <div className="intro">
        <div className="row align-items-center">
          <div className="col-sm-6 col-md-4">
            <Spacer className="d-sm-none"/>
            <div className="header-details">
              <div>
                <h3>Expertise</h3>
                <p>Full - stack Web Development</p>
              </div>
              <div>
                <h3>Education</h3>
                <p>Bachelor's degree in Education Arts (Maths, Business)</p>
                <p>Certificate in Software Engineering</p>
              </div>
              <div>
                <h3>Best Work</h3>
                <p>
                  <a href="https://sekucu.org/" target="_blank">
                    SEKUCU Website
                  </a>
                </p>
                <p>
                  <a href="https://screenlyrics.leetech.top/" target="_blank">
                    Gospel Lyrics Website
                  </a>
                </p>
                <p>
                  <a href="https://fairpricesalon.leetech.top/" target="_blank">
                    Fairprice Salon
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="center-img">
              <img src={me} alt="photo of kelly" className="img-border"/>
            </div>
          </div>
          <div className="pb-3 d-sm-none">
            <hr className="divider" />
          </div>
          <div className="col-sm-6 col-md-4 text-sm-end">
            <div>
              <p>
                Hey there👋! Kelly&apos;s an enthusiastic Software Engineer
                experienced in designing and developing software
                solutions using Python and other programming languages. Actively seeking for opportunities to expand my knowledge base
                through personal projects and ongoing learning initiatives.
              </p>
              <a
                href="mailto:cs.kelly.nesh@gmail.com?subject=Job offer"
                target="_blank"
                type="button"
                title="Hire me"
                className="btn btn-warning"
              >
                Hire Me
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
