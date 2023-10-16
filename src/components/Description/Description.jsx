import {
  DescriptionHeader,
  DescriptionPar,
  DescriptionWrapper,
} from "./Description.styled";

// eslint-disable-next-line react/prop-types
export const Description = ({ headertext, partext }) => {
  return (
    <DescriptionWrapper>
      <DescriptionHeader>{headertext}</DescriptionHeader>
      <DescriptionPar>{partext}</DescriptionPar>
    </DescriptionWrapper>
  );
};
