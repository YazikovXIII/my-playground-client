import { Navigation } from "../Navigation/Navigation";
import "./Burger.scss";

export const BurgerModal = ({ toggle }) => {
  return (
    <div className="burger_wrapper">
      <Navigation toggle={toggle} />
    </div>
  );
};
