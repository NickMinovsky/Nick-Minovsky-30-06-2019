import React from "react";
import LOADER from "../../../img/loader.svg";

import "./Loading.css";

const Loader = () => {
  return (
    <div className="loader">
      <span>
        <img className="loader-img" src={LOADER} alt="loading animation" />
        <p>Loading!</p>
      </span>
    </div>
  );
};

export default Loader;
