import Container from "react-bootstrap/Container";

import Navbar from "react-bootstrap/Navbar";
import logo from "./../../assets/images/img-tea-cozy-logo.webp";
import { NavStyles, Logo, NavLinks, NavLink } from "./NavBarStyles";

const NavBar = () => {
  return (
    <NavStyles>
      <Navbar expand="lg" className="bg-body-dark">
        <Container>
          <Navbar.Brand href="#home">
            <Logo src={logo} alt="logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <NavLinks className="ms-auto">
              <NavLink href="#home">Mission</NavLink>
              <NavLink href="#link">Featured Tea</NavLink>
              <NavLink href="#home">Locations</NavLink>
            </NavLinks>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </NavStyles>
  );
};

export default NavBar;
