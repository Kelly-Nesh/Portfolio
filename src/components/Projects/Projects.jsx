import {
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardText,
  MDBCardTitle,
} from "mdb-react-ui-kit";
import React from "react";
import "./projects.css";
import fairprice from "../../assets/fairprice1.png";
import sekucu from "/src/assets/sekucu.png";
import { Parallax } from "react-scroll-parallax";
const uzima =
  "https://scontent.fnuu1-1.fna.fbcdn.net/v/t39.30808-6/415028714_666671675669945_7466691171484515501_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=dd5e9f&_nc_ohc=zgU2_W9r71wAX9hsKVt&_nc_zt=23&_nc_ht=scontent.fnuu1-1.fna&oh=00_AfB22YU0dtiDX1g_K_evkLM0IyqvSsAci2gkjwwVjSMslw&oe=65CA382D";

const Projects = () => {
  const PROJECTS = [
    [
      "SEKUCU",
      sekucu,
      "In my term as the chairperson, I designed and developed a website with Django as its backend. I am currently involved in its maintenance and making updates to the website.",
    ],
    [
      "Uzima",
      uzima,
      "This project involves developing a digital platform for a local church. The website serves as a hub for the church community, providing information about service times, upcoming events, and church news. Currently in development",
    ],
    [
      "Fairprice",
      fairprice,
      "Local salon website. This project involved creating an  online presence for a local salon. The website was designed to reflect the salon’s warm and welcoming atmosphere, while providing customers with easy access to service descriptions, products, and clients options.",
    ],
  ];
  return (
    <div className="row pr-row py-3" id="projects">
      {PROJECTS.map(([name, image, text]) => {
        return (
          <div className="col-sm-6 col-lg-4 my-5 mb-3 project-col" key={name}>
            <MDBCard
              className="project-card"
              style={{ border: "1px solid #464b4e" }}
            >
              <MDBCardImage
                src={image}
                className="mx-auto rounded-6 position-relative project-image object-cover"
                style={{
                  width: "85%",
                  bottom: "1.5rem",
                  height: "250px",
                }}
              />
              <MDBCardBody>
                <MDBCardTitle className="text-center">{name}</MDBCardTitle>
                <MDBCardText>{text}</MDBCardText>
              </MDBCardBody>
            </MDBCard>
          </div>
        );
      })}
    </div>
  );
};

export default Projects;

export const Persona = () => {
  return (
    <>
      <Parallax className="mx-auto bg-image min-vh-50">
        <div
          className="h-100 d-flex flex-wrap p-3 gap-2 persona"
          style={{
            backgroundColor: "hsla(0, 0%, 0%, 0.5",
            placeItems: "center",
          }}
        >
          <p className=" h4">
            Involved in developing and maintaining Django-based websites for
            diverse clients, ranging from a small business to non-profit
            organizations.
          </p>
          <p className=" h4">
            I offer my services pro bono as a strategy to enhance my skills and
            build a substantial portfolio
          </p>
        </div>
      </Parallax>
    </>
  );
};
