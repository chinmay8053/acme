import React from "react";
import "./footer.styles.scss";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer">
      <div className="support">
        <div className="logo">
          <Link to="/">
            <img
              className="img-logo"
              src="https://assets.website-files.com/5e7ff3ec0c4ef4c974fa99e3/5e7ff57adad44d1f072965b6_logo.svg"
              alt="logo"
            />
          </Link>
        </div>
        <div className="connect">
          <FaFacebook className="icons" />
          <FaInstagram className="icons" />
          <FaTwitter className="icons" />
        </div>
      </div>
      <div className="create">
        Made In <span>Webflow</span>. © 2020.
      </div>
    </div>
  );
}

export default Footer;
