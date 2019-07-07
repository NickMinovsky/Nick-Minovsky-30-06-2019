import React, { Component } from "react";

import weather from "../../API/weather";
import SearchBar from "../Layout/SearchBar/SearchBar";
import Today from "./Today/Today";
import ForecastList from "./ForecastList/ForecastList";
import Condition from "../Layout/Condition/Condition";

import "./Home.css";
class Home extends Component {
  state = { current: "", forecast: "" };

  componentDidMount() {
    this.onSearchSubmit("tel aviv");
  }

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
    // localStorage.setItem("data", JSON.stringify(this.state.current));
  };

  addFav() {
    let oldItems = JSON.parse(localStorage.getItem("itemsArray")) || [];
    let newItem = this.state.current.location.name;
    oldItems.push(newItem);
    localStorage.setItem("itemsArray", JSON.stringify(oldItems));
  }

  render() {
    return (
      <div className="layout">
        <div id="top" className="top-div">
          <SearchBar onSearchSubmit={this.onSearchSubmit.bind(this)} />
          <Today addFav={this.addFav.bind(this)} current={this.state.current} />
        </div>
        <div id="forecast" className="bottom-div">
          <Condition />
          <h3 className="sub-title">Weekley Forecast</h3>
          <ForecastList days={this.state.forecast.forecastday} />
        </div>
      </div>
    );
  }
}
export default Home;
