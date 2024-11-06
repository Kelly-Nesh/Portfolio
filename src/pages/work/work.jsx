import "./work.css";
import bc from "/src/assets/branch-chat.png";
import sekucu from "/src/assets/sekucu.png";
import uzima from "/src/assets/uzima.png";
import sc from "/src/assets/screenlyrics.png";
import convo from "/src/assets/convo.png";
import fp from "/src/assets/fairprice.png";

const work = [
  {
    image: sekucu,
    link: "https://sekucu.org",
    name: "SEKU Christian Union",
    desc: "",
  },
  {
    image: uzima,
    link: "https://uzimachurch.leetech.top",
    name: "Uzima Center",
    desc: "",
  },
  {
    image: sc,
    link: "https://screenlyrics.leetech.top",
    name: "Gospel Lyrics Website",
    desc: "",
  },
  {
    image: convo,
    link: "https://convo.africa",
    name: "Convo Africa",
    desc: "",
  },
  {
    image: fp,
    link: "https://fairpricesalon.leetech.top",
    name: "Fairprice Salon",
    desc: "",
  },
  {
    image: bc,
    link: "https://github.com/Kelly-Nesh/Branch-Chat",
    name: "Customer Service Messaging Webapp",
    desc: "",
  },
];

export function Work() {
  return (
    <section id="work">
      <h2>My Work</h2>
      <div className="row row-cols-sm-2 row-cols-lg-3">
        {work.map((k, idx) => {return <Project data={k} key={idx}/>})}
      </div>
    </section>
  );
}

function Project({ data: { image, link, name, desc } }) {
  return (
    <div className="project">
      <div className="pr-img">
        <img src={image} alt="fairprice salon website" />
      </div>
      <div className="pr-name">
        <h4>{name}</h4>
        <a
          href={link}
          target="_blank"
          role="button"
          title="view project"
          className="d-inline-block mx-auto btn btn-outline-info"
        >
          View
        </a>
      </div>
    </div>
  );
}
