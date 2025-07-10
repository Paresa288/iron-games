import { Link, NavLink } from "react-router-dom";
import NavBarBottom from "./navbar-bottom";
import NavbarTop from "./navbar-top";
import { useAuth } from "../../../contexts/auth-context";

function Navbar() {
  const { user, logout } = useAuth();

  return (
    <nav className="navbar navbar-expand-lg bg-secondary">
      <div className="container-md">
        <Link className="navbar-brand fs-1" to="/">
          IronGames
        </Link>
        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarSupportedContent" 
          aria-controls="navbarSupportedContent" 
          aria-expanded="false" 
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="main-navbar">
          <ul className="navbar-nav me-auto mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link active" aria-current="page" to="/">
                Home
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="navbar-nav">
          {!user && (
            <>
              <NavLink className="nav-link" aria-current="page" to="/login">Login</NavLink>
              <NavLink className="nav-link" aria-current="page" to="/register">Register</NavLink>
            </>
          )}
          {user && (
            <>
              <NavLink className="nav-link" aria-current="page" to="/profile">{user.username}</NavLink>
                <button className="nav-link btn btn-link" onClick={logout}>
                  <i className="fa fa-sign-out" aria-hidden="true"></i>
                </button>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;