import { Link } from "react-router-dom";
import { PageLayout } from "../../layouts";

function NavbarTop() {
  return (
    <PageLayout>
      <div className="d-flex justify-content-between">
        <ul className="list-group list-group-flush">
          <li className="list-group-item border border-0 bg-transparent">
            <Link to="/" className="btn  text-light">Iron Games</Link>
          </li>
        </ul>
        <ul className="list-group list-group-flush list-group-horizontal">
          <li className="list-group-item border border-0 bg-transparent">
            <Link to="/login" className="btn text-light">Login</Link>
          </li>
          <li className="list-group-item border border-0 bg-transparent">
            <Link to="/register" className="btn text-light">Register</Link>
          </li>
        </ul>
      </div>
    </PageLayout>
  );
}

export default NavbarTop;