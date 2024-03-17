import styled from "styled-components";
import logo from "../assets/argentBankLogo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";

const StyledNav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 20px;
`;

const NavLink = styled.a`
  font-weight: bold;
  color: #2c3e50;
  margin-right: 0.5rem;
  display: flex;
  align-items: center;
  gap: 4px;

  &.router-link-exact-active {
    color: #42b983;
  }

  &:hover {
    text-decoration: underline;
  }
`;

const LogoImage = styled.img`
  max-width: 100%;
  width: 200px;
`;

const Nav = () => {
  return (
    <StyledNav>
      <LogoImage src={logo} alt="Logo de ArgentBank" />
      <ul>
        <li>
          <NavLink href="/login">
            <FontAwesomeIcon icon={faCircleUser} />
            Sign In
          </NavLink>
        </li>
      </ul>
    </StyledNav>
  );
};

export default Nav;
