import { DescriptionHeader, DescriptionPar, DescriptionWrapper } from "./Description.styled";

// eslint-disable-next-line react/prop-types
export const Description = ({ headertext, partext, link }) => {
  return (
    <DescriptionWrapper>
      <DescriptionHeader>{headertext}</DescriptionHeader>
      <DescriptionPar>
        {partext}
        {link}
      </DescriptionPar>
    </DescriptionWrapper>
  );
};
