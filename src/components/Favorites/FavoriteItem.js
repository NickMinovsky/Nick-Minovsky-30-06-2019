import React, { Component } from "react";
import { Redirect } from "react-router-dom";

import { Card } from "react-bootstrap";
import "./FavoriteItem.css";

class FavoriteItem extends Component {
  state = { componentShow: true, redirect: false };

  removeFav = () => {
    // copy storage, remove from storage, save and remove from DOM
    const temp = [...JSON.parse(localStorage.getItem("itemsArray"))];
    const index = temp.indexOf(`${this.props.city}`);
    if (index !== -1) {
      temp.splice(index, 1);
    }
    localStorage.setItem("itemsArray", JSON.stringify(temp));
    this.setState({ componentShow: false });
  };

  searchFav = async () => {
    try {
      await localStorage.setItem("searchTerm", this.props.city);
      this.setState({ redirect: true });
    } catch (error) {}
  };
  render() {
    if (this.state.redirect) {
      return <Redirect to="/" />;
    }
    if (this.state.componentShow) {
      return (
        <span className="favContainer">
          <button className="searchFav" onClick={this.searchFav.bind(this)}>
            <i className="fa fa-search" aria-hidden="true" />
          </button>
          <Card className="favItem">
            <Card.Body>
              <Card.Text>{this.props.city}</Card.Text>
            </Card.Body>
          </Card>
          <button
            to="/favorite
            "
            className="removeFav"
            onClick={this.removeFav.bind(this)}
          >
            <i className="fa fa-times-circle" aria-hidden="true" />
          </button>
        </span>
      );
    }
    return "";
  }
}

export default FavoriteItem;
