import styled from "styled-components";
import logo from "../assets/argentBankLogo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser, faSignOut } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import * as auth from "../authentication/auth-provider";
import { useNavigate } from "react-router-dom";

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

const StyledList = styled.ul`
  display: flex;
  gap: 20px;
  justify-content: flex-end;
  align-items: center;
`;

const Nav = () => {
  const user = useSelector((state) => state.user);
  const loggedIn = useSelector((state) => state.loggedIn);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleSignOut(event) {
    event.preventDefault();
    dispatch({ type: "REMOVE_USER" });
    auth.logout();
    navigate("/login");
  }

  function handleClick(event) {
    event.preventDefault();
    if (loggedIn) navigate("/profile");
    else navigate("/login");
  }

  window.addEventListener("storage", (event) => {
    if (event.key === "argentBank-token" && !event.newValue)
      handleSignOut(event);
  });

  return (
    <StyledNav>
      <LogoImage src={logo} alt="Logo de ArgentBank" />
      {loggedIn ? (
        <StyledList>
          <li>
            <NavLink href="/profile" onClick={handleClick}>
              <FontAwesomeIcon icon={faCircleUser} />
              {user}
            </NavLink>
          </li>
          <li>
            <NavLink href="/login" onClick={handleSignOut}>
              <FontAwesomeIcon icon={faSignOut} />
              Sign Out
            </NavLink>
          </li>
        </StyledList>
      ) : (
        <StyledList>
          <li>
            <NavLink href="/login" onClick={handleClick}>
              <FontAwesomeIcon icon={faCircleUser} />
              Sign In
            </NavLink>
          </li>
        </StyledList>
      )}
    </StyledNav>
  );
};

export default Nav;
