export type PaymentSource = 'UPI' | 'Credit Card' | 'Debit Card' | 'Wallet' | 'Net Banking';
export type TransactionType = 'debit' | 'credit';
export type Category =
  | 'Food & Dining' | 'Transport' | 'Shopping' | 'Utilities'
  | 'Entertainment' | 'Health' | 'Subscriptions' | 'Groceries' | 'Income';

export interface Transaction {
  id: string;
  name: string;
  category: Category;
  source: PaymentSource;
  date: string;
  amount: number;
  type: TransactionType;
  icon: string;
}