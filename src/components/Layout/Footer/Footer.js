import React from "react";

import "./Footer.css";
const Footer = () => {
  return (
    <footer className="footer-distributed">
      <div className="footer-right">
        <a href="https://www.facebook.com/" target="_blank">
          <i className="fa fa-facebook" />
        </a>
        <a href="https://www.twitter.com/" target="_blank">
          <i className="fa fa-twitter" />
        </a>
        <a
          href="https://il.linkedin.com/in/nick-minovsky-557383184"
          target="_blank"
        >
          <i className="fa fa-linkedin" />
        </a>
        <a href="https://github.com/nickminovsky" target="_blank">
          <i className="fa fa-github" />
        </a>
      </div>

      <p className="no-margin">
        <span className="brand-name">weatherfy</span> &copy; 2019
      </p>
      <div className="footer-left">
        <p className="footer-links">
          <span class-name="by">a weather app </span>
          <span class-name="by">by Nick Minovsky</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
