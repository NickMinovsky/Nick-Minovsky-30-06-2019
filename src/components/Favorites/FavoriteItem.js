import React, { Component } from "react";

import { Card } from "react-bootstrap";
import "./FavoriteItem.css";

class FavoriteItem extends Component {
  state = { componentShow: true };

  removeFav() {
    // copy storage, remove from storage, save and remove from DOM
    const temp = [...JSON.parse(localStorage.getItem("itemsArray"))];
    const index = temp.indexOf(`${this.props.city}`);
    if (index !== -1) {
      temp.splice(index, 1);
    }
    localStorage.setItem("itemsArray", JSON.stringify(temp));
    this.setState({ componentShow: false });
  }

  searchFav() {
    // redirect back to Home page
  }
  render() {
    if (this.state.componentShow) {
      return (
        <span className="favContainer">
          <button className="searchFav" onClick={this.searchFav.bind(this)}>
            <i class="fa fa-search" aria-hidden="true" />
          </button>
          <Card className="favItem">
            <Card.Body>
              <Card.Text>{this.props.city}</Card.Text>
            </Card.Body>
          </Card>
          <button className="removeFav" onClick={this.removeFav.bind(this)}>
            <i class="fa fa-times-circle" aria-hidden="true" />
          </button>
        </span>
      );
    }
    return "";
  }
}

export default FavoriteItem;
