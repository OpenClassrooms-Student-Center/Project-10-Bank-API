import styled from "styled-components";
import * as auth from "../authentication/auth-provider";
import { useEffect, useState } from "react";

const StyledMain = styled.main`
  background-color: #12002b;
  display: flex;
  flex-direction: column;
  flex: 1;
  color: white;
  align-items: center;
  justify-content: center;
`;

async function getUser(token) {
  const profile = await auth.profile(token);
  return profile.user;
}

const Profile = () => {
  const [user, setUser] = useState(null);
  const token = auth.getToken();

  useEffect(() => {
    getUser(token).then((data) => setUser(data));
  }, [token]);

  return <StyledMain>Bonjour {user}</StyledMain>;
};

export default Profile;
