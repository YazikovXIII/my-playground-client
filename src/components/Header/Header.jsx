import { useSelector } from "react-redux";
import { HeaderWrapper, HeaderZone } from "./Header.styled";
import { Logo, Logo2, Logo3, Logo4 } from "./Logo/Logo";
import { Navigation } from "./Navigation/Navigation";
import { isLoggedIn } from "../../redux/user/authSelectors";

export const Header = () => {
  const isUserLoggedIn = useSelector(isLoggedIn);
  return (
    <HeaderZone>
      <HeaderWrapper>
        {isUserLoggedIn ? <Logo4 /> : <Logo />}
        <Navigation />
        {isUserLoggedIn ? <Logo2 /> : <Logo3 />}
      </HeaderWrapper>
    </HeaderZone>
  );
};
