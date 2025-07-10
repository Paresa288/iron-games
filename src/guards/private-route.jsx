import { Navigate } from "react-router-dom";
import { useAuth } from "../contexts/auth-context";

function PrivateRoute({ children }) {
  const { user } = useAuth();
  if (user) {
    return children;
  } else {
    return <Navigate to="/login" />
  }
}

export default PrivateRoute;