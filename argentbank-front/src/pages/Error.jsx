import styled from "styled-components";

const StyledHeading = styled.h1`
  font-size: 2.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledParagraph = styled.p`
  font-size: 1.5rem;
  display: flex;
  justify-content: center;
`;

const Error = () => {
  return (
    <div>
      <StyledHeading>Page Not Found</StyledHeading>
      <StyledParagraph>The requested page could not be found.</StyledParagraph>
    </div>
  );
};

export default Error;
