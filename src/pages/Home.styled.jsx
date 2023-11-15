import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const HomeWrapper = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;
  @media (min-width: 767px) {
    gap: 20px;
    flex-direction: row;
    justify-content: space-around;
  }
`;

export const HomeWrapperUnAuth = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 120px);
`;
export const StyledPhoto = styled.img`
  padding: 20px 0;
  width: 450px;
  height: auto;
  @media screen and (max-width: 767px) {
    width: 335px;
    padding: 0;
    padding-bottom: 20px;
  }
`;

export const StyledDetailsLink = styled(NavLink)`
  text-decoration: none;
  font-size: 20px;
  color: var(-color-primary-light);
`;
