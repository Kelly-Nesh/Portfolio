import React, { useState } from 'react';
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBNavbarNav,
  MDBNavbarLink,
  MDBIcon,
  MDBCollapse
} from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';

const Navigation = () => {
    // Main navigation
  const [openNav, setOpenNav] = useState(false);

  return (
    <MDBNavbar expand="md" dark bgColor="dark-secondary" className="fixed-top">
      <MDBContainer fluid>
        <MDBNavbarBrand href="#">
          <Link to="https://github.com/Kelly-Nesh" className='text-white'>
            <i class="fab fa-github"></i> Nesh
          </Link>
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
            <MDBNavbarLink href="#projects">Projects</MDBNavbarLink>
            <MDBNavbarLink href="#contact">Contact</MDBNavbarLink>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
  );
}

export default Navigation;
