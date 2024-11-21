import { FC } from "react";
import { Account } from "../../../types/accounts";
import classes from "./AccountItem.module.scss";
import { NavLink } from "react-router-dom";
import Button from "../../../components/Button";
import IconButton from "../../../components/IconButton";
import useViewPort from "../../../hooks/useViewPort";

type Props = {
  account: Account;
};

const AccountItem: FC<Props> = ({ account }) => {
  const { isMobile } = useViewPort();

  return (
    <section className={classes["root"]}>
      <div className={classes["left-section"]}>
        <h3>
          {account.name} ({account.id})
        </h3>
        <p className={classes["balance"]}>$ {account.balance}</p>
        <p>Available Balance</p>
      </div>
      <div className={classes["right-section"]}>
        <NavLink to={`/profile/account/${account.id}`}>
          {isMobile ? (
            <IconButton
              icon={<i className="fa fa-eye" aria-hidden="true"></i>}
              color="primary"
              shape="rounded"
            />
          ) : (
            <Button variant="contained" color="primary">
              View transactions
            </Button>
          )}
        </NavLink>
      </div>
    </section>
  );
};

export default AccountItem;
