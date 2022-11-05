import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../../store/User/user-selector";

const RedirectRoute = ({ children }) => {
  const currentUser = useSelector(selectCurrentUser);
  if (currentUser) {
    return <Navigate to="/" replace />;
  }
  return children;
};

export default RedirectRoute;
