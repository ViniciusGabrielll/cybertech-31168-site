import { useState } from "react";
import styles from "./dropDown.module.css"
import { NavLink } from "react-router-dom";

function Dropdown() {
  const [open, setOpen] = useState(false);

  return (
    <div className={styles.container}>
    <a onClick={() => setOpen(!open)}>Temporadas</a>

      {open && (
        <div>
          <NavLink  to="/temporadas/intoTheDeep" className={({isActive}) => isActive ? "negrito"  : ""} onClick={() => setOpen(false)}>Into The Deep</NavLink>
          <NavLink  to="/temporadas/decode" className={({isActive}) => isActive ? "negrito"  : ""}>Decode</NavLink>
        </div>
      )}
    </div>
  );
}

export default Dropdown;
