import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";
import * as auth from "../authentication/auth-provider";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useState } from "react";
import Error from "../components/Error";

const StyledMain = styled.main`
  background-color: #12002b;
  display: flex;
  flex-direction: column;
  flex: 1;
`;

const StyledLogin = styled.section`
  box-sizing: border-box;
  background-color: white;
  width: 300px;
  margin: 3rem auto 0px;
  padding: 2rem;
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
`;

const StyledInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-bottom: 1rem;
`;

const StyledLabel = styled.label`
  font-weight: bold;
`;

const StyledInput = styled.input`
  padding: 5px;
  font-size: 1.2rem;
`;

const StyledRememberDiv = styled.div`
  display: flex;
  align-items: center;
`;

const StyledRememberLabel = styled.label`
  margin-left: 0.25rem;
`;

const StyledSubmitButton = styled.button`
  display: block;
  width: 100%;
  padding: 8px;
  font-size: 1.1rem;
  font-weight: bold;
  margin-top: 1rem;
  border-color: #00bc77;
  background-color: #00bc77;
  color: #fff;
  text-decoration: underline;
  cursor: pointer;
`;

async function getUser(token) {
  const profile = await auth.profile(token);
  return profile.user;
}

function Login() {
  document.title = "Login";
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [error, setError] = useState({
    username: null,
    password: null,
    other: null,
  });

  async function handleSubmit(event) {
    event.preventDefault();
    const data = new FormData(event.target);
    const email = data.get("email");
    const password = data.get("password");
    try {
      const token = await auth.login({ email, password });
      if (token) {
        const user = await getUser(token);
        dispatch({ type: "SET_USER", payload: { user: user, loggedIn: true } });
        auth.setToken(token);
        auth.setUser(user);
        navigate("/profile");
      }
    } catch (error) {
      console.error("Login error:", error);
      if (error.message === "Error: User not found!")
        setError({
          ...error,
          username: "User not found!",
        });
      else if (error.message === "Error: Password is invalid")
        setError({
          ...error,
          password: "Password is invalid",
        });
      else {
        setError({
          ...error,
          other: "An error occurred, please try again later",
        });
      }
    }
  }

  return (
    <StyledMain>
      <StyledLogin>
        <FontAwesomeIcon icon={faCircleUser} />
        <h1>Sign In</h1>
        <StyledForm onSubmit={handleSubmit}>
          <StyledInputWrapper>
            <StyledLabel htmlFor="email">Username</StyledLabel>
            <StyledInput type="text" id="email" name="email" required />
          </StyledInputWrapper>
          {error.username && <Error error={error.username} />}
          <StyledInputWrapper>
            <StyledLabel htmlFor="password">Password</StyledLabel>
            <StyledInput
              type="password"
              id="password"
              name="password"
              required
            />
          </StyledInputWrapper>
          {error.password && <Error error={error.password} />}
          <StyledRememberDiv>
            <input type="checkbox" id="remember" name="remember" />
            <StyledRememberLabel htmlFor="remember">
              Remember me
            </StyledRememberLabel>
          </StyledRememberDiv>
          {error.other && <Error error={error.other} />}
          <StyledSubmitButton type="submit">Sign In</StyledSubmitButton>
        </StyledForm>
      </StyledLogin>
    </StyledMain>
  );
}

export default Login;
