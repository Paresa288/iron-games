import NavBarBottom from "./navbar-bottom";
import NavbarTop from "./navbar-top";

function Navbar() {
  return (
    <div className="d-flex flex-column text-bg-dark">
      <NavbarTop />
      <NavBarBottom />
    </div>
  );
}

export default Navbar;