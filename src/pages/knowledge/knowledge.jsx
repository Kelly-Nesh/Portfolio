import "./knowledge.css";
import bs from "/src/assets/icons/bs.png";
import c from "/src/assets/icons/c.png";
import css from "/src/assets/icons/css.png";
import dj from "/src/assets/icons/dj.png";
import html from "/src/assets/icons/html.png";
import js from "/src/assets/icons/js.png";
import mysql from "/src/assets/icons/mysql.png";
import py from "/src/assets/icons/py.png";
import rc from "/src/assets/icons/react.png";
import wp from "/src/assets/icons/wp.png";

const knowledge = [
  {
    image: py,
    name: "Python",
    desc: "I am well versed in using Python for scripting and also using its frameworks and its versatile nature to build complex applications. Also, I am proficient in object-oriented programming and design patterns and features in python such as type hinting to speed up development and optimize code.",
  },
  {
    image: js,
    name: "Javascript",
    desc: "I've implemented dynamic and interactive features on websites using JavaScript, including DOM manipulation and asynchronous programming. Experienced in working with popular JavaScript libraries like React.",
  },
  {
    image: c,
    name: "C",
    desc: "Worked with C in alx Software engineering course and knowledgeable with the language, libraries and pitfalls especially in memory management.",
  },
  {
    image: mysql,
    name: "MySQL",
    desc: "Build relational databases using MySQL, with query optimization and indexing when developing websites. I'm proficient in writing SQL queries for data retrieval and manipulation.",
  },
  {
    image: dj,
    name: "Django",
    desc: "I develop dynamic web applications using Django, using its powerful ORM and MVC architecture to create efficient and scalable solutions. I also build RESTful APIs with the Django-restframework, integrating with various frontend technologies like React to deliver seamless user experiences.",
  },
  {
    image: rc,
    name: "React",
    desc: "I construct interactive user interfaces with React, utilizing components, hooks, and state management to create responsive and performant web applications. I'm well versed in building complex single-page applications (SPAs) using React Router and integrating with backend APIs.",
  },
  {
    image: html,
    name: "HTML",
    desc: "I'm skilled in crafting well-structured HTML5 markup to create accessible and semantic web pages.",
  },
  {
    image: css,
    name: "CSS",
    desc: "Skilled in styling web pages using CSS3, including flexbox, grid, and animations to achieve desired visual effects.",
  },
  {
    image: bs,
    name: "Bootstrap",
    desc: "I use bootstrap to increase speed and accuracy when building responsive and mobile-first layouts.",
  },
  {
    image: wp,
    name: "Wordpress",
    desc: "I build custom WordPress sites and utilize plugins to tailor websites to specific client requirements. I'm experienced in managing and maintaining WordPress websites, including performance optimization and leveraging on html and css knowledge to customize default themes.",
  },
];

export function Knowledge() {
  const len = knowledge.length;
  return (
    <section id="knowledge" className="my-2">
      <h2 className="text-uppercase">Knowledge</h2>
      <div className="row px-1">
        <div className="col-sm-6 col-lg-5">
          {knowledge.slice(0, len / 2).map((k) => {
            return <KnowledgeCard data={k} key={k} />;
          })}
        </div>
        <div className="col-sm-6 col-lg-5">
          {knowledge.slice(len / 2, len).map((k) => {
            return <KnowledgeCard data={k} key={k} />;
          })}
        </div>
      </div>
    </section>
  );
}

function KnowledgeCard({ data: { image, name, desc } }) {
  return (
    <div className="know px-3 pt-2">
      <div className="text-center">
        <img className="icon my-1" src={image} loading="lazy"/>
        <h3>{name}</h3>
      </div>
      <div className="text-center">
        <p>{desc}</p>
      </div>
    </div>
  );
}
