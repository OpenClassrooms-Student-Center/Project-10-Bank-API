import { FC, useCallback, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { userSelectors } from "../../redux/user/userSelectors";
import classes from "./index.module.scss";
import { getTransactions } from "../../redux/transactions/transactionsActions";
import { authSelectors } from "../../redux/auth/authSelectors";
import Accounts from "./Accounts";
import UserDetails from "./UserDetails";

const Profile: FC = () => {
  const user = useAppSelector(userSelectors.selectUser);
  const storedToken = useAppSelector(authSelectors.selectToken);

  const dispatch = useAppDispatch();

  const fetchUserProfile = useCallback(() => {
    if (storedToken && user?.id) {
      dispatch(getTransactions());
    }
  }, [dispatch, storedToken, user?.id]);

  useEffect(() => {
    fetchUserProfile();
  }, [fetchUserProfile]);

  if (!user) {
    return null;
  }

  return (
    <div className={classes["root"]}>
      <UserDetails />
      <Accounts />
    </div>
  );
};

export default Profile;
