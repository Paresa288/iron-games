import { Link, NavLink } from "react-router-dom";
import { PageLayout } from "../../layouts";
import { useAuth } from "../../../contexts/auth-context";


function NavbarTop() {
  const { user, logout } = useAuth();

  return (
    <PageLayout>
      <nav className="d-flex justify-content-between nav-container">
        <div className="container">
            <Link to="/" className="navbar-brand text-danger">Iron Games</Link>
            <button 
              className="navbar-toggler" 
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#main-navbar"
              aria-controls="main-navbar"
              aria-expanded="false"
              aria-label="Toggle navigation"  
            >
              <span className="navbar-toggler-icon"></span>      
            </button>
        </div>
        <div className="collapse navbar-collapse" id="main-navbar">
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
      </nav>
    </PageLayout>
  );
}

export default NavbarTop;