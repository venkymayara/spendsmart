import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '',          redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'dashboard', loadComponent: () => import('./features/dashboard/dashboard/dashboard').then(m => m.DashboardComponent) },
  { path: 'transactions', loadComponent: () => import('./features/transactions/transactions/transactions').then(m => m.TransactionsComponent) },
  { path: 'budgets',   loadComponent: () => import('./features/budgets/budgets/budgets').then(m => m.BudgetsComponent) },
  { path: 'savings',   loadComponent: () => import('./features/savings/savings/savings').then(m => m.SavingsComponent) },
  { path: 'advisor',   loadComponent: () => import('./features/ai-advisor/ai-advisor/ai-advisor').then(m => m.AiAdvisorComponent) },
];