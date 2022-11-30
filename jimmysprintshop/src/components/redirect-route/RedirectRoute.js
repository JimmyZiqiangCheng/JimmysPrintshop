import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../../store/user-slice";

const RedirectRoute = ({ children, redirect, requireUser }) => {
  const currentUser = useSelector(selectCurrentUser);
  if (requireUser) {
    if (currentUser) return <Navigate to={redirect} replace />;
  } else {
    if (!currentUser) return <Navigate to={redirect} replace />;
  }
  return children;
};

export default RedirectRoute;
