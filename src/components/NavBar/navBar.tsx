import { useEffect, useRef, useState } from "react";
import "../../main.css";
import styles from "./navBar.module.css";
import Dropdown from "../DropdownButton/dropDown";
import logo from "../../assets/images/logo.png";
import instagramIcon from "../../assets/images/icons/Instagram.png";
import gmailIcon from "../../assets/images/icons/Gmail.png";
import { NavLink } from "react-router-dom";

function NavBar() {
  const [hidden, setHidden] = useState(false);
  const [linksHamburguer, setLinksHamburguer] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY.current) {
        setHidden(true);
        setLinksHamburguer(false);
      } else {
        setHidden(false);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  function toggle() {
    setLinksHamburguer((prev) => !prev);
  }

  return (
    <nav className={`${styles.container} ${hidden ? styles.hidden : ""}`}>
      <div>
        <div>
          <button className={`${styles.menuToggle} ${linksHamburguer ? styles.botaoCinza : ""}`} onClick={toggle}>
            ☰
          </button>

          <div
            className={`${styles.navLinks} ${
              linksHamburguer ? styles.active : ""
            }`}
          >
            <NavLink  to="/" className={({isActive}) => isActive ? styles.linkNegrito  : ""}>Início</NavLink>
            <NavLink  to="/sobre" className={({isActive}) => isActive ? styles.linkNegrito  : ""}>Sobre</NavLink>
            <a href="">Contato</a>
            <a href="">Patrocinadores</a>
            <Dropdown />
          </div>
        </div>
        <img src={logo} alt="CyberTech Logo" className={styles.logo} />
      </div>
      <div>
        <a href="">
          <img src={instagramIcon} alt="Instagram" className={styles.icon} />
        </a>
        <a href="">
          <img src={gmailIcon} alt="Gmail" className={styles.icon} />
        </a>
      </div>
    </nav>
  );
}

export default NavBar;
