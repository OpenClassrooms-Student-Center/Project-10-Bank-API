import styled from "styled-components";

const StyledFooter = styled.footer`
  display: flex;
  justify-content: center;
  border-top: 2px solid #ccc;
  padding: 2rem 0 1.5rem;
`;

const StyledFooterText = styled.p`
  margin: 0;
  padding: 0;
`;

const Footer = () => {
  return (
    <StyledFooter>
      <StyledFooterText>Copyright 2020 Argent Bank</StyledFooterText>
    </StyledFooter>
  );
};

export default Footer;
