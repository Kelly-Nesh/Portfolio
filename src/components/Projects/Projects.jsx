import {
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardText,
  MDBCardTitle,
} from "mdb-react-ui-kit";
import React from "react";
import "./projects.css";
import word from "../../assets/word.jpg";
import sunset from "../../assets/sunset.jpg";
import night from "../../assets/night.jpg";

const Projects = () => {
  const PROJECTS = [
    [
      "SEKUCU",
      sunset,
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit.Aliquid, consequuntur soluta. Facilis, expedita nesciunt temporaliquam fugiat eaque. Cumque, eligendi?",
    ],
    [
      "Uzima",
      word,
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit.Aliquid, consequuntur soluta. Facilis, expedita nesciunt temporaliquam fugiat eaque. Cumque, eligendi?",
    ],
    [
      "Fairprice",
      night,
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit.Aliquid, consequuntur soluta. Facilis, expedita nesciunt temporaliquam fugiat eaque. Cumque, eligendi?",
    ],
  ];
  return (
    <div className="container-fluid">
      <div className="row py-3">
        {PROJECTS.map(([name, image, text]) => {
          return (
            <div className="col-md-6 col-lg-4 bg-tertiary my-5 mb-3">
              <MDBCard
                className="bg-transparent"
                style={{ border: "1px solid white" }}
              >
                <MDBCardImage
                  src={image}
                  className="mx-auto rounded-6 shadow-4 position-relative project-image"
                  style={{
                    width: "80%",
                    bottom: "1.5rem",
                    height: "250px",
                  }}
                />
                <MDBCardBody>
                  <MDBCardTitle>{name}</MDBCardTitle>
                  <MDBCardText>{text}</MDBCardText>
                </MDBCardBody>
              </MDBCard>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;

export const Persona = () => {
  return (
    <div
      className="mx-auto bg-image"
      style={{
        height: "50vh",
        backgroundImage:
          "url(https://images.pexels.com/photos/395196/pexels-photo-395196.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      }}
    >
      <div className="h-100 mask d-grid" style={{ backgroundColor: "hsla(0, 0%, 0%, 0.5", placeItems: "center" }}>
        <p className="text-white text-center display-6">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus cum
          laborum laboriosam eum voluptatum necessitatibus illo, consequatur
          aperiam eius asperiores!
        </p>
      </div>
    </div>
  );
};
