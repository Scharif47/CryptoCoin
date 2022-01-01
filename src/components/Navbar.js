import React from 'react'
import styles from "./Navbar.module.css"

function Navbar({isOpen}) {

  console.log(isOpen)

  return (
    <nav className={`${styles.nav} ${isOpen && styles.active}`}>
      <ul className={styles.nav__content}>
        <li>Home</li>
        <li>something</li>
        <li>brah</li>
      </ul>
    </nav>
  )
}

export default Navbar
