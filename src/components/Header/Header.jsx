import { useSelector } from "react-redux";
import { HeaderWrapper, HeaderZone } from "./Header.styled";
import { BtnAuth, BtnBurger, Logo, Logo2, Logo3, Logo4 } from "./Logo/Logo";
import { Navigation } from "./Navigation/Navigation";
import { isLoggedIn } from "../../redux/user/authSelectors";
import { useState } from "react";
import { BurgerModal } from "./Burger/burger";
import { useScreen } from "../../utils/screenHook";

export const Header = () => {
  const [isModalSown, setModalShown] = useState(false);

  const toggleModal = () => {
    setModalShown(!isModalSown);
  };
  const { width } = useScreen();
  const isUserLoggedIn = useSelector(isLoggedIn);
  const showBurgerModal = isModalSown && width < 767;
  return (
    <HeaderZone>
      {width >= 767 ? (
        <HeaderWrapper>
          {isUserLoggedIn ? <Logo4 /> : <Logo />}
          <Navigation />
          {isUserLoggedIn ? <Logo2 /> : <Logo3 />}
        </HeaderWrapper>
      ) : (
        <HeaderWrapper>
          <Logo4 />
          {isUserLoggedIn ? <BtnBurger toggle={toggleModal} /> : <BtnAuth toggle={toggleModal} />}
        </HeaderWrapper>
      )}
      {showBurgerModal && <BurgerModal toggle={toggleModal} />}
    </HeaderZone>
  );
};
