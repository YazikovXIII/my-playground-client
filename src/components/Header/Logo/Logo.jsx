import { StyledLogoLink, StyledLogoPar } from "./Logo.styled";

export const Logo = () => {
  return (
    <StyledLogoLink to="/">
      <StyledLogoPar>
        <code>&lt;&gt;</code>
      </StyledLogoPar>
    </StyledLogoLink>
  );
};

export const Logo2 = () => {
  return (
    <StyledLogoLink to="/">
      <StyledLogoPar>
        <code>&lt;/&gt;</code>
      </StyledLogoPar>
    </StyledLogoLink>
  );
};
