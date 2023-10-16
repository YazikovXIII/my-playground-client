import { HeaderWrapper, HeaderZone } from "./Header.styled";
import { Logo, Logo2 } from "./Logo/Logo";
import { Navigation } from "./Navigation/Navigation";

export const Header = () => {
  return (
    <HeaderZone>
      <HeaderWrapper>
        <Logo />
        <Navigation />
        <Logo2 />
      </HeaderWrapper>
    </HeaderZone>
  );
};
