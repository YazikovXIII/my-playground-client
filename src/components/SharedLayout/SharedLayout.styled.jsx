import styled from "styled-components";

export const Container = styled.div`
  margin-top: 60px;
  min-height: calc(100vh - 120px);
  max-width: 1440px;
  position: relative;
  margin-left: auto;
  margin-right: auto;

  @media (min-width: 375px) {
    min-width: 375px;
    padding: 0 20px;
  }

  @media (min-width: 768px) {
    min-width: 768px;
    padding: 0 32px;
  }

  @media (min-width: 1440px) {
    width: 1440px;
    padding: 0 20px;
  }
`;

export const Main = styled.main`
  overflow: hidden;
`;
