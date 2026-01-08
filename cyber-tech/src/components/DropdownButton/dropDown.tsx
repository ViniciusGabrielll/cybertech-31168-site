import { useState } from "react";

function Dropdown() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button onClick={() => setOpen(!open)}>Temporadas ⌄</button>

      {open && (
        <div>
          <a href="">Into The Deep</a>
          <a href="">Decode</a>
        </div>
      )}
    </>
  );
}

export default Dropdown;
