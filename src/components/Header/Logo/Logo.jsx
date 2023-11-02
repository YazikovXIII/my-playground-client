import { useDispatch } from "react-redux";
import { logOut } from "../../../redux/user/authOperations";
import { StyledLogoButton, StyledLogoLink, StyledLogoPar } from "./Logo.styled";
import { useNavigate } from "react-router-dom";

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
