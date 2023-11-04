import { useSelector } from "react-redux";
import { isLoggedIn, isUserRefreshing } from "../redux/user/authSelectors";
import { Navigate } from "react-router-dom";

export const PrivateRoute = ({ component: Component, redirectTo = "/" }) => {
  const isUserLoggedIn = useSelector(isLoggedIn);
  const isRefreshing = useSelector(isUserRefreshing);
  const shouldRedirect = !isUserLoggedIn && !isRefreshing;

  return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
};
