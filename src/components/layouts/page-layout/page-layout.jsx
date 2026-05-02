import { Outlet } from "react-router-dom";

function PageLayout() {
  return (
    <div className="container py-3">
      <Outlet/>
    </div>
  );
}

export default PageLayout;