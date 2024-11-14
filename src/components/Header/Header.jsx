import React, { useState } from "react";
import css from "./Header.module.scss";
import { BiPhoneCall, BiMenu, BiX } from "react-icons/bi";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuItemClick = () => {
    setIsMenuOpen(false); // Close menu when item is clicked
  };

  return (
    <div className={`bg-primary ${css.wrapper}`}>
      <div className={`innerWidth ${css.container}`}>
        <div className={css.name}>
          <a href="#">Satyam Kumar</a>
        </div>

        {/* Mobile Menu Button */}
        <div
          className={css.menuIcon}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <BiX size="40px" /> : <BiMenu size="40px" />}
        </div>

        {/* Menu Items */}
        <ul className={`${css.menu} ${isMenuOpen ? css.menuOpen : ""}`}>
          <li onClick={handleMenuItemClick}>
            <a href="#experties">Achievements</a>
          </li>
          <li onClick={handleMenuItemClick}>
            <a href="#work">Experience</a>
          </li>
          <li onClick={handleMenuItemClick}>
            <a href="#portfolio">Portfolio</a>
          </li>
          <li onClick={handleMenuItemClick}>
            <a href="#people">Testimonials</a>
          </li>
            <a onClick={handleMenuItemClick} className={css.phone} href="tel:+916203134277">
              <BiPhoneCall size="40px" />
              Call Me
            </a>
        </ul>
      </div>
    </div>
  );
};

export default Header;
