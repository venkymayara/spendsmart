import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from '../../../services/data';
import { SummaryCardComponent } from '../../../shared/components/summary-card/summary-card';
import { CurrencyInrPipe } from '../../../shared/pipes/currency-inr-pipe';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, SummaryCardComponent, CurrencyInrPipe],
  templateUrl: './dashboard.html',
  styleUrls: ['./dashboard.scss']
})
export class DashboardComponent {
  data = inject(DataService);

  weeklyLabels = ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'];
  weeklySpend  = [4200, 6800, 5100, 8900, 7300, 3600, 4800];
  maxWeekly    = 8900;

  get spendByCategory() { return this.data.spendByCategory; }
  get maxSpend() { return Math.max(...this.spendByCategory.map(c => c.amount)); }

  barWidth(amount: number): string {
    return ((amount / this.maxSpend) * 100) + '%';
  }

  barHeight(val: number): string {
    return ((val / this.maxWeekly) * 52) + 'px';
  }
}