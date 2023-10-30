import { useSelector } from "react-redux";
import { HeaderWrapper, HeaderZone } from "./Header.styled";
import { Logo, Logo2, Logo3 } from "./Logo/Logo";
import { Navigation } from "./Navigation/Navigation";
import { isLoggedIn } from "../../redux/user/authSelectors";

export const Header = () => {
  const isUserLoggedIn = useSelector(isLoggedIn);
  return (
    <HeaderZone>
      <HeaderWrapper>
        <Logo />
        <Navigation />
        {isUserLoggedIn ? <Logo2 /> : <Logo3 />}
      </HeaderWrapper>
    </HeaderZone>
  );
};
