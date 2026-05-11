import { Injectable, signal } from '@angular/core';
import { Transaction } from '../core/models/transaction';
import { Budget } from '../core/models/budget';

@Injectable({ providedIn: 'root' })
export class DataService {

  transactions = signal<Transaction[]>([
    { id: '1',  name: 'Swiggy - Biryani Hut',  category: 'Food & Dining',  source: 'UPI',         date: 'May 9',  amount: 485,   type: 'debit',  icon: '🍛' },
    { id: '2',  name: 'Ola Ride - Airport',     category: 'Transport',      source: 'Credit Card', date: 'May 9',  amount: 620,   type: 'debit',  icon: '🚕' },
    { id: '3',  name: 'Salary Credit',          category: 'Income',         source: 'Net Banking', date: 'May 8',  amount: 75000, type: 'credit', icon: '💰' },
    { id: '4',  name: 'Netflix Subscription',   category: 'Subscriptions',  source: 'Credit Card', date: 'May 8',  amount: 649,   type: 'debit',  icon: '🎬' },
    { id: '5',  name: 'DMart Groceries',        category: 'Groceries',      source: 'Debit Card',  date: 'May 7',  amount: 2340,  type: 'debit',  icon: '🛒' },
    { id: '6',  name: 'PhonePe - Electricity',  category: 'Utilities',      source: 'UPI',         date: 'May 7',  amount: 1240,  type: 'debit',  icon: '⚡' },
    { id: '7',  name: 'Myntra - Summer Sale',   category: 'Shopping',       source: 'Credit Card', date: 'May 6',  amount: 3200,  type: 'debit',  icon: '👗' },
    { id: '8',  name: 'Apollo Pharmacy',        category: 'Health',         source: 'UPI',         date: 'May 6',  amount: 856,   type: 'debit',  icon: '💊' },
    { id: '9',  name: 'BookMyShow - Movie',     category: 'Entertainment',  source: 'Wallet',      date: 'May 5',  amount: 420,   type: 'debit',  icon: '🎥' },
    { id: '10', name: 'Zomato - Pizza',         category: 'Food & Dining',  source: 'UPI',         date: 'May 5',  amount: 380,   type: 'debit',  icon: '🍕' },
    { id: '11', name: 'Metro Card Recharge',    category: 'Transport',      source: 'UPI',         date: 'May 4',  amount: 500,   type: 'debit',  icon: '🚇' },
    { id: '12', name: 'Airtel Postpaid',        category: 'Utilities',      source: 'UPI',         date: 'May 4',  amount: 599,   type: 'debit',  icon: '📶' },
    { id: '13', name: 'Freelance Payment',      category: 'Income',         source: 'Net Banking', date: 'May 3',  amount: 12000, type: 'credit', icon: '💸' },
    { id: '14', name: 'Starbucks Coffee',       category: 'Food & Dining',  source: 'Wallet',      date: 'May 3',  amount: 590,   type: 'debit',  icon: '☕' },
    { id: '15', name: 'Amazon Prime',           category: 'Subscriptions',  source: 'Credit Card', date: 'May 2',  amount: 299,   type: 'debit',  icon: '📦' },
  ]);

  budgets = signal<Budget[]>([
    { category: 'Food & Dining', icon: '🍜', color: '#f5a623', limit: 8000,  spent: 1455 },
    { category: 'Transport',     icon: '🚗', color: '#7c6af7', limit: 4000,  spent: 1120 },
    { category: 'Shopping',      icon: '🛍️', color: '#e05c7a', limit: 6000,  spent: 3200 },
    { category: 'Utilities',     icon: '💡', color: '#3de8b0', limit: 3000,  spent: 1839 },
    { category: 'Entertainment', icon: '🎬', color: '#60c7f8', limit: 2500,  spent: 420  },
    { category: 'Health',        icon: '💊', color: '#a78bfa', limit: 2000,  spent: 856  },
    { category: 'Subscriptions', icon: '📱', color: '#fb7185', limit: 1500,  spent: 948  },
    { category: 'Groceries',     icon: '🛒', color: '#34d399', limit: 5000,  spent: 2340 },
  ]);

  get totalIncome(): number { return 87000; }

  get totalSpent(): number {
    return this.transactions()
      .filter(t => t.type === 'debit')
      .reduce((sum, t) => sum + t.amount, 0);
  }

  get totalSavings(): number { return this.totalIncome - this.totalSpent; }

  get savingsRate(): number {
    return Math.round((this.totalSavings / this.totalIncome) * 100);
  }

  get spendByCategory(): { name: string; amount: number; color: string }[] {
    const map: Record<string, number> = {};
    this.transactions()
      .filter(t => t.type === 'debit')
      .forEach(t => { map[t.category] = (map[t.category] || 0) + t.amount; });
    const colorMap: Record<string, string> = {
      'Food & Dining': '#f5a623', 'Transport': '#7c6af7', 'Shopping': '#e05c7a',
      'Utilities': '#3de8b0', 'Entertainment': '#60c7f8', 'Health': '#a78bfa',
      'Subscriptions': '#fb7185', 'Groceries': '#34d399'
    };
    return Object.entries(map).map(([name, amount]) => ({
      name, amount, color: colorMap[name] || '#888'
    })).sort((a, b) => b.amount - a.amount);
  }
}