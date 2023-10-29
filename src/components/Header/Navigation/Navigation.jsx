import { useSelector } from "react-redux";
import { NavWrapper, NavigationLink } from "./Navigation.styled";
import { getUser } from "../../../redux/user/authSelectors";

export const Navigation = () => {
  const user = useSelector(getUser);

  return (
    <NavWrapper>
      <NavigationLink to="/">&lt;Home/&gt;</NavigationLink>
      {user.email ? (
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
