import styled from "styled-components";
import logo from "../assets/argentBankLogo.png";

const StyledNav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 20px;
  // width: 100%;
`;

const NavLink = styled.a`
  font-weight: bold;
  color: #2c3e50;

  &.router-link-exact-active {
    color: #42b983;
  }

  &:hover {
    text-decoration: underline;
  }
`;

const NavList = styled.ul`
  display: flex;
  gap: 0.5rem;
`;

const LogoImage = styled.img`
  max-width: 100%;
  width: 200px;
`;

const Nav = () => {
  return (
    <StyledNav>
      <LogoImage src={logo} alt="Logo de ArgentBank" />
      <NavList>
        <li>
          <NavLink href="/link1">Link 1</NavLink>
        </li>
        <li>
          <NavLink href="/link2">Link 2</NavLink>
        </li>
      </NavList>
    </StyledNav>
  );
};

export default Nav;
