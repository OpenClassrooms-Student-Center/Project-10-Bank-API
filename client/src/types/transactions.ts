export type TransactionCategory =
  | "No category"
  | "Entertainment"
  | "Food"
  | "Transport"
  | "Other"
  | "Shopping"
  | "Utilities"
  | "Rent"
  | "Healthcare"
  | "Education"
  | "Travel";
export type TransactionStatus = "PENDING" | "COMPLETED" | "REJECTED" | "ERROR";

export type Transaction = {
  accountId: string;
  accountName: string;
  amount: number;
  balanceLeft: number;
  category: TransactionCategory;
  createdAt: Date | string;
  description: string;
  id: string;
  notes: string;
  pspReference: string;
  status: TransactionStatus;
  type: string;
  updatedAt: Date | string;
  userId: string;
};
