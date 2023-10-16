import { NavWrapper, NavigationLink } from "./Navigation.styled";

export const Navigation = () => {
  return (
    <NavWrapper>
      <NavigationLink to="/">&lt;Home/&gt;</NavigationLink>
      <NavigationLink to="/todos">&lt;Todos/&gt;</NavigationLink>
    </NavWrapper>
  );
};
