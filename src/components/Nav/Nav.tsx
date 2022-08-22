import "./nav.css";
import logo from "../../assets/images/logo.svg";
import mobileNav from "../../assets/images/menu.svg";
import { Button } from "../Button/Button";
import { useState } from "react";

export const Nav = () => {
  const [nav, setNav] = useState<string | null>(null);

  const handleMobileNav = () => {
    console.log(nav);
    nav ? setNav(null) : setNav("show-nav");
  };

  return (
    <nav>
      <div className="logo-links-container">
        <img src={logo} alt="logo" />
        <div className={`nav-link-wrapper ${nav}`}>
          <a href="/">Features</a>
          <a href="/">Pricing</a>
          <a href="/">Resources</a>
        </div>
      </div>
      <div className={`btn-container  ${nav}`}>
        <Button className="header-btn">Login</Button>
        <Button className="header-btn green-bg-btn">Sign Up</Button>
      </div>
      <img
        onClick={handleMobileNav}
        className="mobile-nav show-nav"
        src={mobileNav}
        alt="mob-nav"
      />
    </nav>
  );
};
