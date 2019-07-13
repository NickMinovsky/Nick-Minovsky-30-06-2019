import React from "react";

import Loading from "../../Layout/Loading/Loading";
import { Button } from "react-bootstrap";

import "./Today.css";

const Today = ({ current, addFav, status }) => {
  if (!current) {
    return (
      <div className="main">
        <div className="main-desc">
          <Loading />
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="main">
        <div className="main-desc">
          <p className="main-desc__name">{current.location.name}</p>
          <p>
            <strong>Today</strong> it's {current.current.temp_c}
            <sup>o</sup>C
          </p>
          <p className="main-desc__text">
            and {current.current.condition.text}
          </p>
          <Button onClick={addFav} variant="outline-primary" className="fav">
            Add to favorites
          </Button>
          <p className="alert2">{status}</p>
        </div>
      </div>
    </div>
  );
};

export default Today;
