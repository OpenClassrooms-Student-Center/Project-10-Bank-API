import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";

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
  // gap: 1rem;
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

function Login() {
  return (
    <StyledMain>
      <StyledLogin>
        <FontAwesomeIcon icon={faCircleUser} />
        <h1>Sign In</h1>
        <StyledForm>
          <StyledInputWrapper>
            <StyledLabel htmlFor="username">Username</StyledLabel>
            <StyledInput type="text" id="username" name="username" />
          </StyledInputWrapper>
          <StyledInputWrapper>
            <StyledLabel htmlFor="password">Password</StyledLabel>
            <StyledInput type="password" id="password" name="password" />
          </StyledInputWrapper>
          <StyledRememberDiv>
            <input type="checkbox" id="remember" name="remember" />
            <StyledRememberLabel htmlFor="remember">
              Remember me
            </StyledRememberLabel>
          </StyledRememberDiv>
          <StyledSubmitButton type="submit">Sign In</StyledSubmitButton>
        </StyledForm>
      </StyledLogin>
    </StyledMain>
  );
}

export default Login;
