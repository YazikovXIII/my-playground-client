import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const HomeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  @media (min-width: 767px) {
    flex-direction: row;
    justify-content: space-around;
  }
`;
export const StyledPhoto = styled.img`
  padding: 20px 0;
  width: 450px;
  height: auto;
`;

export const StyledDetailsLink = styled(NavLink)`
  text-decoration: none;
  font-size: 20px;
  color: var(-color-primary-light);
`;
