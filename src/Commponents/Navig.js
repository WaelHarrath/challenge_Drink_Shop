import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

function Navig() {
  return (
    <Navbar bg="primary" variant="dark">
      <img
        src="https://seeklogo.com/images/O/orange-drinks-logo-26A932A99B-seeklogo.com.png"
        width="30"
        height="30"
        className="d-inline-block align-top"
        alt="drinklogo"
      />
      <Link to="/">
        <Navbar.Brand >DrinkShop</Navbar.Brand>
      </Link>
      <Nav className="mr-auto">
        <Link to="/">
          <Navbar.Brand >Home</Navbar.Brand>
        </Link>
        <Link to="/About">
          <Navbar.Brand >About</Navbar.Brand>
        </Link>
      </Nav>
    </Navbar>
  );
}

export default Navig;
