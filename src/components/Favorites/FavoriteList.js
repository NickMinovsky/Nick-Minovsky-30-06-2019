import React, { Component } from "react";

import SearchBarFav from "../Layout/SearchBarFav/SearchBarFav";
import FavoriteItem from "./FavoriteItem";
import { Button } from "react-bootstrap";
import "./FavoriteList.css";

class Favorites extends Component {
  state = { current: [] };

  componentDidMount() {
    this.mountStorage();
  }

  mountStorage = async () => {
    if (localStorage !== undefined && localStorage !== false) {
      const stateStore = await JSON.parse(localStorage.getItem("itemsArray"));
      const uniqueState = new Set(stateStore);
      this.setState({ current: Array.from(uniqueState) });
    }
  };

  clearFav = async () => {
    try {
      await localStorage.removeItem("itemsArray");
      this.setState({ current: [] });
    } catch (error) {
      console.log("Error while deleting item from favorites,", error.message);
    }
  };

  render() {
    return (
      <div className="layout2">
        <SearchBarFav />
        <h3 className="sub-title">
          {this.state.current ? "Youre Favorite Cities:" : "Favorites Cleared!"}
        </h3>
        <div className="fav-container">
          {Object.values(this.state.current).map((city, index) => {
            return <FavoriteItem key={index} city={city} />;
          })}
        </div>
        <Button
          className="remove"
          onClick={this.clearFav.bind(this)}
          variant="outline-primary"
        >
          Clear ALL Favorites
        </Button>
      </div>
    );
  }
}

export default Favorites;
