import { FC } from "react";
import { Account } from "../../../types/accounts";
import classes from "./AccountDetails.module.scss";

type Props = {
  account: Account;
};

const AccountDetails: FC<Props> = ({ account }) => {
  return (
    <section className={classes["root"]}>
      <h2>
        {account.name} ({account.id})
      </h2>
      <p className={classes["balance"]}>${account.balance}</p>
      <p>Available Balance</p>
    </section>
  );
};

export default AccountDetails;
