import { Link } from "react-router-dom";
import { PageLayout } from "../../layouts";

function NavBarBottom() {
  return (
    <PageLayout>
      <div className="nav-container">
        <ul className="list-group list-group-flush list-group-horizontal">
          
          <li className="list-group-item border border-0 bg-transparent">
            <Link to="/builder" className="btn text-light">
              <i className="fa fa-compass d-flex gap-2">
                Discover
              </i>
            </Link>
          </li>
          
          <li className="list-group-item border border-0 bg-transparent">
            <Link to="/products" className="btn text-light">
              <i className="fa fa-line-chart d-flex gap-2">
                Trending
              </i>
            </Link>
          </li>
          
          <li className="list-group-item border border-0 bg-transparent">
            <Link to="/guides" className="btn text-light">
              <i className="fa fa-book d-flex gap-2">
                Wiki
              </i>
            </Link>
          </li>
        
        </ul>
      </div>
    </PageLayout>
  );
}

export default NavBarBottom;