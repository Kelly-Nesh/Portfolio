import "./knowledge.css";
import bs from "/src/assets/icons/bs.png"
import c from "/src/assets/icons/c.png"
import css from "/src/assets/icons/css.png"
import dj from "/src/assets/icons/dj.png"
import html from "/src/assets/icons/html.png"
import js from "/src/assets/icons/js.png"
import mysql from "/src/assets/icons/mysql.png"
import py from "/src/assets/icons/py.png"
import rc from "/src/assets/icons/react.png"
import wp from "/src/assets/icons/wp.png"

export function Knowledge() {
  return (
    <section id="knowledge" className="my-2">
      <h2 className="text-uppercase">Knowledge</h2>
      <div className="row px-1">
        <div className="col-sm-6 col-md-5">
          <div className="know d-flex gap-2">
            <div>
              <img
                className="icon"
                src={dj}
                loading="lazy"
              ></img>
            </div>
            <div>
              <h3>Django</h3>
              <p>
                I develop dynamic web applications using Django, leveraging its
                powerful ORM and MVC architecture to create efficient and
                scalable solutions. I also build RESTful APIs with the
                Django-restframework, integrating with various frontend
                technologies like React to deliver seamless user experiences.
              </p>
            </div>
          </div>
          <div className="know d-flex gap-2">
            <div>
              <img
                className="icon"
                src={rc}
                loading="lazy"
              ></img>
            </div>
            <div>
              <h3>React</h3>
              <p>
                I construct interactive user interfaces with React, utilizing
                components, hooks, and state management to create responsive and
                performant web applications. I&apos;m well versed in building
                complex single-page applications (SPAs) using React Router and
                integrating with backend APIs.
              </p>
            </div>
          </div>
          <div className="know d-flex gap-2">
            <div>
              <img
                className="icon"
                src={html}
                loading="lazy"
              ></img>
            </div>
            <div>
              <h3>HTML</h3>
              <p>
                I&apos;m skilled in crafting well-structured HTML5 markup to
                create accessible and semantic web pages.
              </p>
            </div>
          </div>
          <div className="know d-flex gap-2">
            <div className="d-flex">
              <img
                className="icon"
                src={css}
                loading="lazy"
              ></img>
              <img
                className="icon align-self-center"
                src={bs}
                loading="lazy"
              ></img>
            </div>
            <div>
              <h3>CSS &amp; Bootstrap</h3>
              <p>
                Skilled in styling web pages using CSS3, including flexbox,
                grid, and animations to achieve desired visual effects. Adding
                on top Bootstrap to rapidly develop responsive and mobile-first
                layouts.
              </p>
            </div>
          </div>
          <div className="know d-flex gap-2">
            <div>
              <img
                className="icon"
                src={wp}
                loading="lazy"
              ></img>
            </div>
            <div>
              <h3>Wordpress</h3>
              <p>
                I build custom WordPress sites and utilize plugins to tailor
                websites to specific client requirements. I&apos;m experienced
                in managing and maintaining WordPress websites, including
                performance optimization and leveraging on html and css
                knowledge to customize default themes.
              </p>
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-md-5">
          <div className="know d-flex">
            <div>
              <img
                className="icon"
                src={py}
                loading="lazy"
              ></img>
            </div>
            <div>
              <h3>Python</h3>
              <p>
                I am well versed in using Python for system level manipulations
                and also using its frameworks and its versatile nature to build
                complex applications. Also, I am proficient in object-oriented
                programming and design patterns and features in python such as
                type hinting to speed up development and optimize code.
              </p>
            </div>
          </div>
          <div className="know d-flex gap-2">
            <div>
              <img
                className="icon"
                src={js}
                loading="lazy"
              ></img>
            </div>
            <div>
              <h3>Javascript</h3>
              <p>
                I've implemented dynamic and interactive features on websites
                using JavaScript, including DOM manipulation and asynchronous
                programming. Experienced in working with popular JavaScript
                libraries like React.
              </p>
            </div>
          </div>
          <div className="know d-flex gap-2">
            <div>
              <img
                className="icon"
                src={c}
                loading="lazy"
              ></img>
            </div>
            <div>
              <h3>C</h3>
              <p>
                Worked with C in alx Software engineering course and well versed
                with the language, libraries and pitfalls esp in memory
                management.
              </p>
            </div>
          </div>
          <div className="know d-flex gap-2">
            <div>
              <img
                className="icon"
                src={mysql}
                loading="lazy"
              ></img>
            </div>
            <div>
              <h3>MySQL</h3>
              <p>
                Designed and optimized relational databases using MySQL,
                including schema design, query optimization, and indexing when
                developing websites. Proficient in writing SQL queries for data
                retrieval and manipulation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
