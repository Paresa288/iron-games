import NavBarBottom from "./navbar-bottom";
import NavbarTop from "./navbar-top";

function Navbar() {
  return (
    <div className="d-flex flex-column bg-secondary">
      <NavbarTop />
      <NavBarBottom />
    </div>
  );
}

export default Navbar;