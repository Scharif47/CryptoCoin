import React from "react";
import styles from "./Navbar.module.css";

function Navbar({ isOpen }) {
  


  return (
    <nav className={`${styles.nav} ${isOpen && styles.active}`}>
      <ul className={styles.nav__content}>
        <li>Home</li>
        <li>Crypto</li>
        <li>DeFi</li>
        <li>NFT</li>
      </ul>
    </nav>
  );
}

export default Navbar;
