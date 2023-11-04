import { useSelector } from "react-redux";
import { isLoggedIn } from "../redux/user/authSelectors";
import { Navigate } from "react-router-dom";

export const RestrictedRoute = ({ component: Component, redirectTo = "/" }) => {
  const isUserLiggedIn = useSelector(isLoggedIn);

  return isUserLiggedIn ? <Navigate to={redirectTo} /> : Component;
};
