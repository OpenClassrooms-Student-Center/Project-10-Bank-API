import { FC } from "react";
import { useTransactions } from "../../../hooks/useTransactions";
import AccountItem from "./AccountItem";
import classes from "./index.module.scss";

const Accounts: FC = () => {
  const { accounts } = useTransactions();
  return (
    <div className={classes["root"]}>
      {accounts.map((account) => (
        <AccountItem account={account} key={account.id} />
      ))}
    </div>
  );
};

export default Accounts;
