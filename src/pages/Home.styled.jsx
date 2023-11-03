import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const HomeWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
`;
export const StyledPhoto = styled.img`
  width: 450px;
  height: auto;
`;

export const StyledDetailsLink = styled(NavLink)`
  text-decoration: none;
  font-size: 20px;
  color: var(-color-primary-light);
`;
