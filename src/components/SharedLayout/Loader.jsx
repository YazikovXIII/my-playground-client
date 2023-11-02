import styled from "styled-components";
import { BallTriangle } from "react-loader-spinner";

const StyledAudioWrapper = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 9999;
  background-color: var(--color-primary-dark);
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

export const Loader = () => {
  return (
    <StyledAudioWrapper className="audiowrapper">
      <BallTriangle width="200" color="#ffffff" />
    </StyledAudioWrapper>
  );
};
