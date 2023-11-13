import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const NavWrapper = styled.div`
  width: fit-content;
  display: flex;
  justify-content: space-between;
  gap: 10px;
  flex-direction: column;
  align-items: center;
  @media (min-width: 767px) {
    flex-direction: row;
    align-items: center;
  }
`;
export const NavigationLink = styled(NavLink)`
  display: flex;
  text-decoration: none;
  color: var(--color-secondary-light);
  align-items: center;
  justify-content: center;
  font-size: 20px;
  font-weight: 400;
  padding: 0 10px;
  width: fit-content;
  transition: all 300ms ease-in;
  &:hover {
    color: var(--color-primary-dark);
    background-color: var(--color-secondary-light);
  }
  &.active {
    border: 2px solid var(--color-secondary-light);
  }
  @media (min-width: 767px) {
    font-size: 16px;
  }
  @media (min-width: 1440px) {
    font-size: 20px;
  }
`;
