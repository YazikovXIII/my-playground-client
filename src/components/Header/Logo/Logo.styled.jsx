import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const StyledLogoLink = styled(NavLink)`
  text-decoration: none;
  display: flex;
  height: 40px;
  width: 40px;
  align-items: center;
  justify-content: center;
  transition: all 300ms ease-in-out;
  &:hover {
    transform: scale(1.3);
  }
`;

export const StyledLogoButton = styled.button`
  background-color: transparent;
  border: none;
  text-decoration: none;
  display: flex;
  height: 40px;
  width: fit-content;
  align-items: center;
  justify-content: center;
  transition: all 300ms ease-in-out;
  &:hover {
    transform: scale(1.3);
    cursor: pointer;
  }
`;

export const StyledLogoPar = styled.p`
  color: green;
  font-size: 20px;
  font-weight: 400;
`;
