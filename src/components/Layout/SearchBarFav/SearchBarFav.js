import React, { Component } from "react";
import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import SUN_ICON from "../../../img/sun.svg";
import "./SearchBarFav.css";

class SearchBarFav extends Component {
  state = { term: "" };

  inputHandler = event => {
    let input = event.target.value;
    this.setState({ term: input });
    this.props.addToFav(this.state.term);
  };
  onFormSubmit = event => {
    event.preventDefault();
    this.props.onSearchSubmit(this.state.term);
  };

  render() {
    return (
      <Navbar className="navbar" bg="light" expand="lg">
        <Navbar.Brand>
          <img className="sun_icon" src={SUN_ICON} alt="" />
          <span className="brand-name">weatherfy</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Link className="link" to="/">
              Go Back
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default SearchBarFav;
