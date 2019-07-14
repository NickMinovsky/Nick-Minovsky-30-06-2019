import React from "react";

import ForecastDay from "./ForecastDay/ForecastDay";
import Loading from "../../Layout/Loading/Loading";

import "./ForecastList.css";

const ForecastList = ({ days }) => {
  if (!days) {
    return (
      <div className="main">
        <div className="main-desc">
          <Loading />
        </div>
      </div>
    );
  }
  const list = days.map((day, index) => {
    return <ForecastDay day={day} key={index} />;
  });

  return <div className="forecast-list">{list}</div>;
};

export default ForecastList;
