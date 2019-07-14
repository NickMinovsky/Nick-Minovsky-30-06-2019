import React from "react";
import moment from "moment";

import "./ForecastDay.css";

const Forecast = ({ day }) => {
  return (
    <div className="main2">
      <div className="main2-desc">
        <p className="main2-desc__name">
          on <strong className="day">{moment(day.date).format("dddd")}</strong>
        </p>
        <p className="main2-desc__text">It's {day.day.condition.text}</p>
        <img className="main2__icon" src={day.day.condition.icon} alt="icon" />
        <p className="main2__deg">
          and {day.day.maxtemp_c} <sup>o</sup>C
        </p>
      </div>
    </div>
  );
};

export default Forecast;
