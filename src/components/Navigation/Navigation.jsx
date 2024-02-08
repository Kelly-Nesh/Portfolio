import React, { useState } from "react";
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBNavbarNav,
  MDBNavbarLink,
  MDBIcon,
  MDBCollapse,
} from "mdb-react-ui-kit";
import { Link } from "react-router-dom";

const Navigation = () => {
  // Main navigation
  const [openNav, setOpenNav] = useState(false);

  return (
    <MDBNavbar
      expand="md"
      dark
      className="fixed-top"
      style={{ backdropFilter: "blur(3px)", background: "rgba(0, 0, 0, 0.2)" }}
    >
      <MDBContainer fluid>
        <MDBNavbarBrand href="https://github.com/Kelly-Nesh">
          <i className="fab fa-github" /> &nbsp;Nesh
        </MDBNavbarBrand>
        <MDBNavbarToggler
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={() => setOpenNav(!openNav)}
        >
          <MDBIcon fas icon="bars" />
        </MDBNavbarToggler>
        <MDBCollapse navbar open={openNav}>
          <MDBNavbarNav>
            <MDBNavbarLink active aria-current="page" href="#">
              Home
            </MDBNavbarLink>
            <MDBNavbarLink active href="#projects">
              Projects
            </MDBNavbarLink>
            <MDBNavbarLink active href="#contact">
              Contact
            </MDBNavbarLink>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
  );
};

export default Navigation;
