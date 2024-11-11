import "./work.css";
import bc from "/src/assets/branch-chat.png";
import sekucu from "/src/assets/sekucu.png";
import uzima from "/src/assets/uzima.png";
import sc from "/src/assets/screenlyrics.png";
import convo from "/src/assets/convo.png";
import fp from "/src/assets/fairprice.png";
import { Card } from "react-bootstrap";
import { IoArrowRedoOutline } from "react-icons/io5";

const work = [
  {
    image: sekucu,
    link: "https://sekucu.org",
    name: "SEKU Christian Union",
    desc: "In my term as the chairperson, I designed and developed a website with Django as its backend. I am currently involved in its regular maintenance and improvement.",
  },
  {
    image: sc,
    link: "https://screenlyrics.leetech.top",
    name: "Gospel Lyrics Website",
    desc: "Developed a Gospel Lyrics website, inspired by my role as ICT Chairperson at SEKUCU. This platform assists church media teams by offering easily accessible, pre-formatted and ready-to-project lyrics, with a quick-copy feature, saving time and effort during projection.",
  },
  {
    image: convo,
    link: "https://convo.africa",
    name: "Convo Africa",
    desc: "Involved in the management of the Convo Africa website. This involves using wordpress and knowledge in HTML and CSS to make updates, create product pages and improvements to the site through using and customizing wordpress templates",
  },
  {
    image: fp,
    link: "https://fairpricesalon.leetech.top",
    name: "Fairprice Salon",
    desc: "Local salon website. This project involved creating an  online presence for a local salon. The website was designed to reflect the salon’s warm and welcoming atmosphere, while providing customers with easy access to service descriptions, products, and clients options.",
  },
  {
    image: bc,
    link: "https://github.com/Kelly-Nesh/Branch-Chat",
    name: "Customer Service Messaging Webapp",
    desc: "A scalable customer service messaging application, featuring real-time communication between customers and support agents leveraging WebSocket technology in React and Django.",
  },
  {
    image: uzima,
    link: "https://uzima.leetech.top",
    name: "Uzima Center",
    desc: "This project involves developing a digital platform for a local church. The website serves as a hub for the church community, providing information about service times, upcoming events, and church news. Currently in development.",
  },
];

export function Work() {
  return (
    <section id="work">
      <h2>My Work</h2>
      <div className="row gy-3 row-cols-sm-2 row-cols-lg-3">
        {work.map((k, idx) => {
          return <Project data={k} key={idx} />;
        })}
      </div>
    </section>
  );
}

function Project({ data: { image, link, name, desc } }) {
  return (
    <article className="col-sm-6 col-lg-4 project1">
      <Card>
        {/* Desktop */}
        <Card.Img src={image} className="h-100 object-fit-cover" />
        <Card.ImgOverlay className="py-0 d-none d-sm-flex">
          <Card.Title>
            <h4>{name}</h4>
          </Card.Title>
          <Card.Body className="py-0">
            {<CardBody desc={desc} link={link} />}
          </Card.Body>
        </Card.ImgOverlay>

        {/* Mobile */}
        <Card.Body className="d-sm-none">
          <Card.Title>
            <h4>{name}</h4>
          </Card.Title>
          <CardBody desc={desc} link={link} />
        </Card.Body>
      </Card>
    </article>
  );
}

function CardBody({desc, link}) {
  return (
    <>
      <p className="mb-0">{desc}</p>
      <div className="text-center mt-2">
        <a href={link} className="btn btn-outline-primary">
          View
          <IoArrowRedoOutline style={{verticalAlign: "sub"}}/>
        </a>
      </div>
    </>
  );
}
