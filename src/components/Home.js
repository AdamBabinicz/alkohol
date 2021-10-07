import React, { useState } from "react";
import logo from "../img/2.png";
import "./Home.css";
import { HiMenuAlt1 } from "react-icons/hi";

function Home() {
  // FIXED HEADER
  window.addEventListener("scroll", function () {
    const header = document.querySelector(".header");
    header.classList.toggle("active", window.scrollY > 0);
  });
  // TOOGLE MENU
  const [show, setShow] = useState(false);

  return (
    <div className="home" id="start">
      <div className="home__bg">
        <div className="header d__flex align__items__center pxy__30">
          <div className="logo">
            <img src={logo} alt="..." />
          </div>
          <div className="navigation pxy__30">
            <ul className="navbar d__flex">
              <li className="nav__items mx__15">
                <a href="#start">Start</a>
              </li>
              <li className="nav__items mx__15">
                <a href="#ja">Ja</a>
              </li>
              <li className="nav__items mx__15">
                <a href="#etapy">Etapy</a>
              </li>
              <li className="nav__items mx__15">
                <a href="#skutki">Skutki</a>
              </li>
              <li className="nav__items mx__15">
                <a href="#nauka">Nauka</a>
              </li>
              <li className="nav__items mx__15">
                <a href="#kontakt">Kontakt</a>
              </li>
            </ul>
          </div>
          {/* TOOGLE MENU */}
          <div className="toggle__menu pointer">
            <HiMenuAlt1 onClick={() => setShow(!show)} />
          </div>
          {/* SIDEBAR */}
          {show ? (
            <div className="sideNavbar">
              <ul className="sidebar d__flex">
                <li className="side" onClick={() => setShow(!show)}>
                  <a href="#start">Start</a>
                </li>
                <li className="side" onClick={() => setShow(!show)}>
                  <a href="#ja">Ja</a>
                </li>
                <li className="side" onClick={() => setShow(!show)}>
                  <a href="#etapy">Etapy</a>
                </li>
                <li className="side" onClick={() => setShow(!show)}>
                  <a href="#skutki">Skutki</a>
                </li>
                <li className="side" onClick={() => setShow(!show)}>
                  <a href="#nauka">Nauka</a>
                </li>
                <li className="side" onClick={() => setShow(!show)}>
                  <a href="#kontakt">Kontakt</a>
                </li>
              </ul>
            </div>
          ) : null}
        </div>
        {/* HOME CONTENT */}
        <div className="container">
          <div className="home__content">
            <div className="home__meta">
              <h1 className="home__text pz__10">Jestem alkoholikiem</h1>
              <h2 className="home__text pz__10">nie mogę przestać pić</h2>
              <h3 className="home__text sweet pz__10">
                wciąż piję, piję i&nbsp;piję ...
              </h3>
              <h4 className="home__text pz__10">
                nie znam wyjścia z&nbsp;labiryntu
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
