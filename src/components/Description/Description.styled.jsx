import styled from "styled-components";

export const DescriptionWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 120px);
`;

export const DescriptionHeader = styled.h1`
  font-size: 40px;
`;

export const DescriptionPar = styled.p`
  text-align: center;
  margin-top: 20px;
  font-size: 20px;
  max-width: 450px;
`;
