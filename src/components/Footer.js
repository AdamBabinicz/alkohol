import React from "react";
import "./Footer.css";
import img from "../img/2.png";

function Footer() {
  return (
    <div
      className="footer d__flex align__items__center justify__content__space__center pz-10"
      style={{ padding: "10px 20px", xIndex: "100" }}
    >
      <img src={img} alt="..." className="footer__img pointer" />
      <span className="copyright">2021 - {new Date().getFullYear()}.</span>
    </div>
  );
}

export default Footer;
