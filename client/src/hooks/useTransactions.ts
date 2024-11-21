import { useCallback, useMemo } from "react";
import { useAppSelector } from "../redux/hooks";
import { transactionsSelectors } from "../redux/transactions/transactionsSelectors";
import { Account } from "../types/accounts";

export const useTransactions = () => {
  const transactions =
    useAppSelector(transactionsSelectors.selectTransactions) || [];

  const currentTransactions = useMemo(
    () => transactions,
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [JSON.stringify(transactions)]
  );

  const getUpdatedBalanceFromTransactions = useCallback(
    (accountId: string) => {
      return (
        currentTransactions
          .filter((transaction) => transaction.accountId === accountId)
          .sort(
            (a, b) =>
              new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
          )[0]?.balanceLeft || 0
      );
    },
    [currentTransactions]
  );

  const getAccounts: () => Account[] = useCallback(() => {
    const accountsSet = new Set<string>();

    if (!currentTransactions.length) {
      return [];
    }

    currentTransactions.forEach((transaction) => {
      accountsSet.add(
        JSON.stringify({
          id: transaction.accountId,
          name: transaction.accountName,
          balance: getUpdatedBalanceFromTransactions(transaction.accountId),
        })
      );
    });

    return Array.from(accountsSet).map((account) => JSON.parse(account));
  }, [currentTransactions, getUpdatedBalanceFromTransactions]);

  const getTransactionsByAccountId = useCallback(
    (accountId: string) =>
      currentTransactions.filter(
        (transaction) => transaction.accountId === accountId
      ),
    [currentTransactions]
  );

  return {
    allTransactions: currentTransactions,
    accounts: getAccounts(),
    getTransactionsByAccountId,
  };
};
