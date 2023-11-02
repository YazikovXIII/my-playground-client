import styled from "styled-components";

export const HeaderZone = styled.div`
  position: fixed;
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  width: 100%;
  height: 80px;
  background-color: var(--color-primary-dark);
  border-bottom-right-radius: 25px;
  border-bottom-left-radius: 25px;
`;

export const HeaderWrapper = styled.div`
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  max-width: 1440px;
  position: relative;
  margin-left: auto;
  margin-right: auto;

  @media (min-width: 375px) {
    width: 375px;
    padding: 0 20px;
  }

  @media (min-width: 768px) {
    width: 768px;
    padding: 0 32px;
  }

  @media (min-width: 1280px) {
    width: 1280px;
    padding: 0 20px;
  }
`;
