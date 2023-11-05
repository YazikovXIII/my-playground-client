import { useSelector } from "react-redux";
import { NavWrapper, NavigationLink } from "./Navigation.styled";
import { isLoggedIn } from "../../../redux/user/authSelectors";

export const Navigation = () => {
  const isUserLoggedIn = useSelector(isLoggedIn);

  return (
    <NavWrapper>
      {isUserLoggedIn ? (
        <>
          <NavigationLink to="/">&lt;Home/&gt;</NavigationLink>
          <NavigationLink to="/todos">&lt;Todos/&gt;</NavigationLink>
          <NavigationLink to="/log">&lt;Log/&gt;</NavigationLink>
          <NavigationLink to="/about">&lt;About/&gt;</NavigationLink>
        </>
      ) : (
        <>
          <NavigationLink to="/login">&lt;Sign in/&gt;</NavigationLink>
          <NavigationLink to="/registration">&lt;Sign up/&gt;</NavigationLink>
        </>
      )}
    </NavWrapper>
  );
};
