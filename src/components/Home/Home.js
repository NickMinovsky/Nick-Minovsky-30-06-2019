import React, { Component } from "react";

import weather from "../../API/weather";
import SearchBar from "../Layout/SearchBar/SearchBar";
import Today from "../Home/Today/Today";
import ForecastList from "./ForecastList/ForecastList";
import Condition from "../Layout/Condition/Condition";

class Home extends Component {
  state = { current: "", forecast: "", favorites: "" };

  onSearchSubmit = async term => {
    const response = await weather.get("/forecast.json", {
      params: {
        q: term
      }
    });
    this.setState({
      current: response.data,
      forecast: response.data.forecast
    });

    localStorage.setItem("data", JSON.stringify(this.state.current));
  };

  componentDidMount() {
    this.onSearchSubmit("tel aviv");
  }

  render() {
    return (
      <div className="layout">
        <div id="home" className="top-div">
          <SearchBar onSearchSubmit={this.onSearchSubmit.bind(this)} />
          <Today addFavorite={this.addFavorite} current={this.state.current} />
        </div>
        <div id="forecast" className="bottom-div">
          <Condition />
          <ForecastList days={this.state.forecast.forecastday} />
        </div>
      </div>
    );
  }
}
export default Home;
