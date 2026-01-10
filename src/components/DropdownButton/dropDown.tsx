import { useState } from "react";
import styles from "./dropDown.module.css"

function Dropdown() {
  const [open, setOpen] = useState(false);

  return (
    <div className={styles.container}>
      <a onClick={() => setOpen(!open)}>Temporadas</a>

      {open && (
        <div>
          <a href="">Into The Deep</a>
          <a href="">Decode</a>
        </div>
      )}
    </div>
  );
}

export default Dropdown;
