import React, { Component } from "react";

import weather from "../../API/weather";
import SearchBar from "../Layout/SearchBar/SearchBar";
import Today from "./Today/Today";
import ForecastList from "./ForecastList/ForecastList";
import Condition from "../Layout/Condition/Condition";
import Toast from "../Layout/Toast/Toast";
import "./Home.css";

class Home extends Component {
  state = { current: "", forecast: "", status: "" };

  componentDidMount() {
    this.onSearchSubmit("tel aviv"); // API request
  }
  onSearchSubmit = async term => {
    try {
      const response = await weather.get("/forecast.json", {
        params: {
          q: term
        }
      });
      this.setState({
        current: response.data,
        forecast: response.data.forecast,
        status: ""
      });
    } catch (error) {
      console.log("error while fetching API,", error.message);
    }
  };
  addFav() {
    const oldItems = JSON.parse(localStorage.getItem("itemsArray")) || [];
    const newItem = this.state.current.location.name;
    if (!oldItems.includes(newItem)) {
      oldItems.push(newItem);
      localStorage.setItem("itemsArray", JSON.stringify(oldItems));
      this.setState({ status: `${newItem} was added succesfully` });
    } else {
      this.setState({ status: `${newItem} has already been added` });
    }
  }
  render() {
    return (
      <div className="layout">
        <div id="top" className="top-div">
          <SearchBar onSearchSubmit={this.onSearchSubmit.bind(this)} />
          <Today
            addFav={this.addFav.bind(this)}
            current={this.state.current}
            status={this.state.status}
          />
          <Toast />
        </div>
        <div id="forecast" className="bottom-div">
          <Condition />
          <h3 className="sub-title2">Your Weekley Forecast</h3>
          <ForecastList days={this.state.forecast.forecastday} />
        </div>
      </div>
    );
  }
}
export default Home;
