import { DescriptionHeader, DescriptionPar, DescriptionWrapper, HelloHeader } from "./Description.styled";

// eslint-disable-next-line react/prop-types
export const Description = ({ username, headertext, partext }) => {
  return (
    <DescriptionWrapper>
      {username && <HelloHeader>Hello,{username}!</HelloHeader>}
      <DescriptionHeader>{headertext}</DescriptionHeader>
      <DescriptionPar>{partext}</DescriptionPar>
    </DescriptionWrapper>
  );
};
