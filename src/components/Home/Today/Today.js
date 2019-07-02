import React from "react";
import Loading from "../../Layout/Loading/Loading";

import "./Today.css";

const WeatherBlock = ({ current }) => {
  while (!current) {
    return (
      <div className="main">
        <div className="main-desc">
          <Loading />
        </div>
      </div>
    );
  }

  return (
    <div className="main">
      <div className="main-desc">
        <p className="main-desc__name">{current.location.name}</p>
        <p>
          <strong>Today</strong> it's {current.current.temp_c} <sup>o</sup>C
        </p>
        <p className="main-desc__text">and {current.current.condition.text}</p>
      </div>
    </div>
  );
};

export default WeatherBlock;
