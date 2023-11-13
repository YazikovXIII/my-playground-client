import { useSelector } from "react-redux";
import { NavWrapper, NavigationLink } from "./Navigation.styled";
import { isLoggedIn } from "../../../redux/user/authSelectors";
import { useScreen } from "../../../utils/screenHook";
import { Logo2 } from "../Logo/Logo";

export const Navigation = ({ toggle }) => {
  const { width } = useScreen();
  const isUserLoggedIn = useSelector(isLoggedIn);
  const handleLinkClick = () => {
    if (toggle) {
      toggle();
    }
  };
  return (
    <NavWrapper>
      {isUserLoggedIn ? (
        <>
          <NavigationLink to="/" onClick={handleLinkClick}>
            &lt;Home/&gt;
          </NavigationLink>
          <NavigationLink to="/todos" onClick={handleLinkClick}>
            &lt;Todos/&gt;
          </NavigationLink>
          <NavigationLink to="/log" onClick={handleLinkClick}>
            &lt;Log/&gt;
          </NavigationLink>
          <NavigationLink to="/about" onClick={handleLinkClick}>
            &lt;About/&gt;
          </NavigationLink>
          {width <= 768 && <Logo2 />}
        </>
      ) : (
        <>
          <NavigationLink to="/login" onClick={handleLinkClick}>
            &lt;Sign in/&gt;
          </NavigationLink>
          <NavigationLink to="/registration" onClick={handleLinkClick}>
            &lt;Sign up/&gt;
          </NavigationLink>
        </>
      )}
    </NavWrapper>
  );
};
