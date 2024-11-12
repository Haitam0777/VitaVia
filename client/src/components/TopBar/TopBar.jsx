import React, { useState } from "react";
import "./topbar.scss";
import { AiOutlineAlignRight } from "react-icons/ai";
import { Link } from "react-router-dom";

export default function TopBar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [clickedMenuBtn, setClickedMenuBtn] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
  };

  const handleChooseLink = () => {
    setClickedMenuBtn(false);
  };

  return (
    <div
      className={`topbar ${isScrolled && "scrolled"} ${
        clickedMenuBtn && "clickedMenuBtn"
      }`}
    >
      <div className="logo">
        <Link to="/">
          <img src="/images/logo.png" alt="" />
        </Link>
      </div>

      <div className="navButtons">
        <ul>
          <Link to="/" onClick={handleChooseLink}>
            <li>Accueil</li>
          </Link>
          <Link to="/aboutUs" onClick={handleChooseLink}>
            <li
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              À propos de nous
              {/* {isHovered && (
                            <ul className="dropdown">
                            <li><Link to="/ourTeam" onClick={handleChooseLink}>Notre Équipe</Link></li>
                            <li><Link to="/ourMission" onClick={handleChooseLink}>Notre Mission</Link></li>
                            <li><Link to="/ourHistory" onClick={handleChooseLink}>Notre Histoire</Link></li>
                            </ul>
                            )} */}
            </li>
          </Link>
          <Link to="/Services" onClick={handleChooseLink}>
            <li>Nos produits</li>
          </Link>
          <Link to="/contactUs" onClick={handleChooseLink}>
            <li>Contactez Nous</li>
          </Link>
        </ul>
      </div>
      <div
        className="menuBtn"
        onClick={() => setClickedMenuBtn(!clickedMenuBtn)}
      >
        <AiOutlineAlignRight className="theMenuBtn" />
      </div>
    </div>
  );
}
