import { FC, useEffect } from "react";
import classes from "./index.module.scss";
import { useTransactions } from "../../../hooks/useTransactions";
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { authSelectors } from "../../../redux/auth/authSelectors";
import { getTransactions } from "../../../redux/transactions/transactionsActions";
import { userSelectors } from "../../../redux/user/userSelectors";
import AccountDetails from "./AccountDetails";
import Table, { ColumnCell, Row } from "../../../components/Table";
import { formatDate } from "../../../utils/formatHelpers";
import TransactionDetails from "./TransactionDetails";
import Chip from "../../../components/Chip";
import useViewPort from "../../../hooks/useViewPort";

const Account: FC = () => {
  const user = useAppSelector(userSelectors.selectUser);
  const storedToken = useAppSelector(authSelectors.selectToken);

  const { accounts, getTransactionsByAccountId } = useTransactions();
  const { isMobile } = useViewPort();

  const params = useParams<{ id: string }>();
  const dispatch = useAppDispatch();

  const account = accounts.find((account) => account.id === params.id);

  useEffect(() => {
    if (storedToken && user?.id) {
      dispatch(getTransactions());
    }
  }, [dispatch, storedToken, user?.id]);

  if (!account) {
    return <div className={classes["root"]}>Account not found</div>;
  }

  const columns: ColumnCell[] = [
    {
      label: isMobile ? (
        <i className="fa fa-calendar" aria-hidden="true"></i>
      ) : (
        "DATE"
      ),
      key: "date",
    },
    {
      label: isMobile ? (
        <i className="fa fa-th-large" aria-hidden="true"></i>
      ) : (
        "DESCRIPTION"
      ),
      key: "description",
    },
    {
      label: isMobile ? (
        <i className="fa fa-money" aria-hidden="true"></i>
      ) : (
        "AMOUNT"
      ),
      key: "amount",
    },
    {
      label: isMobile ? (
        <i className="fa fa-balance-scale" aria-hidden="true"></i>
      ) : (
        "BALANCE"
      ),
      key: "balance",
    },
  ];

  const rows: Row[] = getTransactionsByAccountId(account?.id).map(
    (transaction) => {
      const isExpense = transaction.type === "EXPENSE";

      return {
        id: transaction.id,
        date: formatDate({
          date: transaction.createdAt,
          options: isMobile
            ? { year: "2-digit", month: "2-digit", day: "2-digit" }
            : {
                year: "numeric",
                month: "long",
                day: "numeric",
              },
        }),
        description: transaction.description,
        amount: (
          <Chip
            label={
              isMobile
                ? `$${transaction.amount}`
                : `${isExpense ? "-" : "+"} $${transaction.amount}`
            }
            type={isExpense ? "error" : "success"}
          />
        ),
        balance: <Chip label={`$${transaction.balanceLeft}`} />,
        expandedContent: <TransactionDetails transaction={transaction} />,
      };
    }
  );

  return (
    <div className={classes["root"]}>
      <AccountDetails account={account} />
      <section className={classes["transactions"]}>
        <Table columns={columns} rows={rows} isRowsExpandable />
      </section>
    </div>
  );
};

export default Account;
