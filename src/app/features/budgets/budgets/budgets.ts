import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from '../../../services/data';
import { CurrencyInrPipe } from '../../../shared/pipes/currency-inr-pipe';

@Component({
  selector: 'app-budgets',
  standalone: true,
  imports: [CommonModule, CurrencyInrPipe],
  templateUrl: './budgets.html',
  styleUrls: ['./budgets.scss']
})
export class BudgetsComponent {
  data = inject(DataService);

  get budgets() { return this.data.budgets(); }

  pct(spent: number, limit: number): number {
    return Math.min(Math.round((spent / limit) * 100), 100);
  }

  isOver(spent: number, limit: number): boolean {
    return spent > limit;
  }

  overBudgetCount(): number {
    return this.budgets.filter(b => b.spent > b.limit).length;
  }

  totalBudget(): number {
    return this.budgets.reduce((s, b) => s + b.limit, 0);
  }

  totalSpentOnBudgets(): number {
    return this.budgets.reduce((s, b) => s + b.spent, 0);
  }
}