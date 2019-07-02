import React, { Component } from "react";
import { Nav, Navbar, Form, FormControl, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import SUN_ICON from "../../../img/sun.svg";
import "./SearchBar.css";

class SearchBar extends Component {
  state = { term: "" };

  inputHandler = event => {
    let input = event.target.value;
    this.setState({ term: input });
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
              Home
            </Link>
            <Link className="link" to="/favorites">
              Favorites
            </Link>
          </Nav>
          <Form inline onSubmit={this.onFormSubmit}>
            <FormControl
              value={this.state.term}
              onChange={this.inputHandler}
              type="text"
              placeholder="Enter a city name"
              required
              className="mr-sm-2"
            />
            <Button type="submit" variant="outline-primary">
              Click Me!
            </Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default SearchBar;
