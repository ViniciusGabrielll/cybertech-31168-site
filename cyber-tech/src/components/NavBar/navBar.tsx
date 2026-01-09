import { useEffect, useRef, useState } from "react";
import styles from "./navBar.module.css";
import Dropdown from "../DropdownButton/dropDown";
import logo from "../../assets/images/logo.png";
import instagramIcon from "../../assets/images/icons/Instagram.png";
import gmailIcon from "../../assets/images/icons/Gmail.png";

function NavBar() {
  const [hidden, setHidden] = useState(false);
  const lastScrollY = useRef(0);

  useEffect (() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if(currentScrollY > lastScrollY.current) {
        setHidden(true);
      } else {
        setHidden(false);
      }

      lastScrollY.current = currentScrollY;
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  return (
    <nav className={`${styles.container} ${hidden ? styles.hidden : ""}`}>
      <div>
        <img src={logo} alt="CyberTech Logo" className={styles.logo}/>
        <a href="">Início</a>
        <a href="">Sobre</a>
        <a href="">Contato</a>
        <a href="">Patrocinadores</a>
        <Dropdown />
      </div>
      <div>
        <a href="">
          <img src={instagramIcon} alt="Instagram" className={styles.icon}/>
        </a>
        <a href="">
          <img src={gmailIcon} alt="Gmail" className={styles.icon}/>
        </a>
      </div>
    </nav>
  );
}

export default NavBar;
