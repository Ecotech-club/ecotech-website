import Link from "next/link";
import React, { useState } from "react";
import styles from "../../styles/navbar.module.css"
import NavItem from "./NavItem";

const MENU_LIST = [
  { text: "Home", href: "#hero" },
  { text: "Ecotech", href: "#ecotech" },
  { text: "Events", href: "#events" },
  { text: "FAQ", href: "#faq" },
  { text: "Contact", href: "#contact" }
];
const Navbar = () => {
  const [navActive, setNavActive] = useState(false);
  const [activeIdx, setActiveIdx] = useState(-1);

  return (
    <header className={styles.header}>
      <nav className={styles.navbar}>
        <div className={styles.logo_container}>
          <Link href={"/"}>
            <img
              src="/Home-images/Small_logo.png"
              alt="Logo"
              className={styles.logo}
            />
          </Link>
        </div>
        <div
          onClick={() => setNavActive(!navActive)}
          className={styles.nav__menu_bar}
        >
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div className={navActive ? styles.active_small : styles.nav__menu_list}>
          {MENU_LIST.map((menu, idx) => (
            <div
              onClick={() => {
                setActiveIdx(idx);
                setNavActive(false);
              }}
              key={menu.text}
            >
              <NavItem active={activeIdx === idx} {...menu} />
            </div>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;




/*import React from 'react'
import styles from "../../styles/navbar.module.css"
import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };
  return (
    <header className={styles.header}>
      <nav className={styles.navbar} ref={navRef}>
        <div className={styles.logo_container}>
          <a href='/'>
            <img
              src="/Home-images/Small_logo.png"
              alt="Logo"
              className={styles.logo}
            />
          </a>
        </div>
        <div className={styles.nav_container}>
          <div className={styles.link_container}>
            <a href='#hero'>Home</a>
          </div>
          <div className={styles.link_container}>
            <a href='#ecotech'>Ecotech</a>
          </div>
          <div className={styles.link_container}>
            <a href='#events'>Events</a>
          </div>
          <div className={styles.link_container}>
            <a href='#faq'>FAQ</a>
          </div>
          <div className={styles.link_container}>
            <a href='#contact'>Contact</a>
          </div>
          <button
            className={styles.nav_btn & styles.nav_close_btn}
            onClick={showNavbar}>
            <FaTimes />
          </button>
        </div>
      </nav>
      <button className={styles.nav_btn} onClick={showNavbar}>
        <FaBars />
      </button>
    </header>
  )
}

export default Navbar*/
