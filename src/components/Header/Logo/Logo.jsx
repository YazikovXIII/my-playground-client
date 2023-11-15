import { useDispatch } from "react-redux";
import { logOut } from "../../../redux/user/authOperations";
import { StyledLogoButton, StyledLogoLink, StyledLogoPar } from "./Logo.styled";
import { useNavigate } from "react-router-dom";
import "./Logo.scss";
import { ReactSVG } from "react-svg";

export const Logo = () => {
  return (
    <StyledLogoLink to="/">
      <StyledLogoPar>
        <code>&lt;Playground&gt;</code>
      </StyledLogoPar>
    </StyledLogoLink>
  );
};

export const Logo2 = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await dispatch(logOut());
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <StyledLogoButton onClick={handleSubmit}>
      <StyledLogoPar>
        <code>&lt;Log Out/&gt;</code>
      </StyledLogoPar>
    </StyledLogoButton>
  );
};

export const Logo3 = () => {
  return (
    <StyledLogoLink to="/">
      <StyledLogoPar>
        <code>&lt;/Playground&gt;</code>
      </StyledLogoPar>
    </StyledLogoLink>
  );
};

export const Logo4 = () => {
  return (
    <StyledLogoLink to="/">
      <StyledLogoPar>
        <code>&lt;Playground/&gt;</code>
      </StyledLogoPar>
    </StyledLogoLink>
  );
};

export const BtnAuth = ({ toggle }) => {
  return (
    <button
      onClick={() => {
        toggle();
      }}
      className="enter_button"
    >
      <ReactSVG
        src="/assets/SVG/enter-svgrepo-com.svg"
        beforeInjection={(svg) => {
          svg.classList.add("enter_svg");
        }}
      />
    </button>
  );
};

export const BtnBurger = ({ toggle }) => {
  return (
    <button
      onClick={() => {
        toggle();
      }}
      className="enter_button"
    >
      <ReactSVG
        src="/assets/SVG/burger-checklist-list-menu-navigation-svgrepo-com.svg"
        beforeInjection={(svg) => {
          svg.classList.add("enter_svg");
        }}
      />
    </button>
  );
};
