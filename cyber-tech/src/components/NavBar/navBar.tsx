import Dropdown from "../DropdownButton/dropDown";

function NavBar() {
  return (
    <>
      <div>
        <img src="" alt="CyberTech Logo" />
        <a href="">Início</a>
        <a href="">Sobre</a>
        <a href="">Contato</a>
        <a href="">Patrocinadores</a>
        <Dropdown/>
      </div>
      <div>
        <a href="">
          <img src="" alt="Instagram"/>
        </a>
        <a href="">
          <img src="" alt="Gmail"/>
        </a>
      </div>
    </>
  );
}

export default NavBar;
