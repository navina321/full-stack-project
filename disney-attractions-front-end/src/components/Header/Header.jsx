import React from "react";
import Navigation from "../../components/Navigation/Navigation";
import DisneyCastle from "../../assets/images/header-images/disney-castle.png";
import DisneyLogo from "../../assets/images/header-images/disney-logo.png";
import "./Header.scss";
const Header = () => {
  return (
    <div className="header-component">
      <div className="header-logo-container">
        <img
          src={DisneyCastle}
          alt=" disney-castle-logo"
          className="header-logo-container__logo"
        />
        <img
          src={DisneyLogo}
          alt="disney-title"
          className="header-logo-container__title"
        />
      </div>
    </div>
  );
};

export default Header;
