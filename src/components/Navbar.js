import React from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";

function Navbar({ isOpen }) {
  function disableScroll() {
    // Get the current page scroll position
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    let scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;

    // if any scroll is attempted, set this to the previous value
    window.onscroll = function () {
      window.scrollTo(scrollLeft, scrollTop);
    };
  }

  function enableScroll() {
    window.onscroll = function () {};
  }

  isOpen ? disableScroll() : enableScroll();

  return (
    <nav
      className={`bg-gradient-to-b from-indigo-200 to-gray-200 ${styles.nav} ${
        isOpen && styles.active
      }`}
    >
      <ul className={styles.nav__content}>
        <Link to="/">Home</Link>
        <Link to="/">Crypto</Link>
        <Link to="/">DeFi</Link>
        <Link to="/">NFT</Link>
      </ul>
    </nav>
  );
}

export default Navbar;
