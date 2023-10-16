import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const NavWrapper = styled.div`
  width: fit-content;
  display: flex;
  justify-content: space-between;
  gap: 10px;
`;
export const NavigationLink = styled(NavLink)`
  display: flex;
  text-decoration: none;
  align-items: center;
  justify-content: center;
  color: green;
  font-size: 20px;
  font-weight: 400;

  width: 100px;
  transition: all 300ms ease-in-out;
  &:hover {
    color: black;
    background-color: green;
  }
  &.active {
    border: 1px solid green;
  }
`;
