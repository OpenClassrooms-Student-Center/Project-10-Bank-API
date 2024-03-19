import styled from "styled-components";
import { useSelector } from "react-redux";

const StyledMain = styled.main`
  background-color: #12002b;
  display: flex;
  flex-direction: column;
  flex: 1;
  color: white;
  align-items: center;
  justify-content: center;
`;

const Profile = () => {
  const user = useSelector((state) => state.user);
  const loggedIn = useSelector((state) => state.loggedIn);

  return (
    <StyledMain>
      {loggedIn ? (
        <h1>Welcome, {user}!</h1>
      ) : (
        <h1>Vous devez vous connecter</h1>
      )}
    </StyledMain>
  );
};

export default Profile;
