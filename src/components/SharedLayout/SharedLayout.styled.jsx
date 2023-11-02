import styled from "styled-components";

export const Container = styled.div`
  margin-top: 80px;
  min-height: calc(100vh - 80px);
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

export const Main = styled.main`
  overflow: hidden;
`;
