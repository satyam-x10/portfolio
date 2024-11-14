import React, { useState } from "react";
import css from "./Header.module.scss";
import { BiPhoneCall, BiMenu, BiX } from "react-icons/bi";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
          <li>
            <a href="#experties">Achievements</a>
          </li>
          <li>
            <a href="#work">Experience</a>
          </li>
          <li>
            <a href="#portfolio">Portfolio</a>
          </li>
          <li>
            <a href="#people">Testimonials</a>
          </li>
          <li className={css.phone}>
            <a href="tel:+916203134277">
              <BiPhoneCall size="40px" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
