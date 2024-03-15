import styled from "styled-components";

const StyledFooter = styled.footer`
  display: flex;
  justify-content: center;
  border-top: 2px solid #ccc;
  padding: 2rem 0 1.5rem;
`;

const Footer = () => {
  return (
    <StyledFooter>
      <p>Copyright 2020 Argent Bank</p>
    </StyledFooter>
  );
};

export default Footer;
