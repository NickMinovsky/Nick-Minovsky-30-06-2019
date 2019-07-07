import React, { Component } from "react";

import SearchBarFav from "../Layout/SearchBarFav/SearchBarFav";
import FavoriteItem from "./FavoriteItem";
import Loading from "../Layout/Loading/Loading";
import { Button } from "react-bootstrap";
import "./FavoriteList.css";

class Favorites extends Component {
  state = { current: {} };

  componentDidMount() {
    this.mountStorage();
  }

  mountStorage = async () => {
    if (localStorage !== undefined) {
      const stateStore = await JSON.parse(localStorage.getItem("itemsArray"));
      let uniqueState = new Set(stateStore);
      this.setState({ current: Array.from(uniqueState) });
    }
  };

  clearFav() {
    localStorage.removeItem("itemsArray");
    this.setState({ current: null });
    window.location.reload();
  }

  render() {
    if (this.state.current === undefined) {
      return <p>You haven't added any favorite cities.</p>;
    }
    return (
      <div className="layout">
        <div className="top-div2">
          <SearchBarFav />
          <div className="fav-container">
            <h3 className="sub-title">
              {this.state.current !== null ? "Hello" : "yes"}
            </h3>
            {Object.values(this.state.current).map((city, index) => {
              return <FavoriteItem key={index} city={city} />;
            })}
            <Button
              onClick={this.clearFav.bind(this)}
              variant="outline-warning"
            >
              Clear Favorites
            </Button>
          </div>
        </div>
      </div>
    );
  }
}

export default Favorites;
