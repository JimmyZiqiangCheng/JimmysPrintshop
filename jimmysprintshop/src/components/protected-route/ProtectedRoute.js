import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../../store/User/user-selector";

const ProtectedRoute = ({ children }) => {
  const currentUser = useSelector(selectCurrentUser);
  if (!currentUser) {
    return <Navigate to="/auth" replace />;
  }
  return children;
};

export default ProtectedRoute;
