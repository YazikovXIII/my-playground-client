import { useSelector } from "react-redux";
import { NavWrapper, NavigationLink } from "./Navigation.styled";
import { isLoggedIn } from "../../../redux/user/authSelectors";

export const Navigation = () => {
  const isUserLoggedIn = useSelector(isLoggedIn);
  console.log(isUserLoggedIn);

  return (
    <NavWrapper>
      <NavigationLink to="/">&lt;Home/&gt;</NavigationLink>
      {isUserLoggedIn ? (
        <NavigationLink to="/todos">&lt;Todos/&gt;</NavigationLink>
      ) : (
        <>
          <NavigationLink to="/login">&lt;Login/&gt;</NavigationLink>
          <NavigationLink to="/registration">&lt;Registration/&gt;</NavigationLink>
        </>
      )}
    </NavWrapper>
  );
};
