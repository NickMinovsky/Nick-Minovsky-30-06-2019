import React, { Component } from "react";

import { Card, Button } from "react-bootstrap";
import SearchBarFav from "../Layout/SearchBarFav/SearchBarFav";
import Loading from "../Layout/Loading/Loading";
import "../../App.css";

class Favorites extends Component {
  state = { current: {} };

  componentDidMount() {
    this.mountStorage();
  }

  mountStorage = async () => {
    if (localStorage !== undefined) {
      const showMe = await JSON.parse(localStorage.getItem("data"));
      this.setState({ current: showMe });
    }
  };

  favList = () => {
    this.state.current.forEach(item => {
      return <p>{this.state.current.location.name}</p>;
    });
  };

  render() {
    if (this.state.current.location === undefined) {
      return <Loading />;
    }
    return (
      <div className="layout">
        <div id="home" className="top-div2">
          <SearchBarFav />
          <div className="fav-container">
            <Card style={{ width: "18rem" }}>
              <Card.Body>
                <Card.Text>{this.state.current.location.name}</Card.Text>
                <Card.Text>{this.favList}</Card.Text>

                <Button variant="primary">Remove from favorites</Button>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    );
  }
}

export default Favorites;
