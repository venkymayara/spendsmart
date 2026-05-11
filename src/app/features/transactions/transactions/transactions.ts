import { Component, inject, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DataService } from '../../../services/data';
import { CurrencyInrPipe } from '../../../shared/pipes/currency-inr-pipe';

@Component({
  selector: 'app-transactions',
  standalone: true,
  imports: [CommonModule, FormsModule, CurrencyInrPipe],
  templateUrl: './transactions.html',
  styleUrls: ['./transactions.scss']
})
export class TransactionsComponent {
  data = inject(DataService);

  searchQuery = signal('');
  selectedSource = signal<string>('All');
  selectedType = signal<string>('All');

  sources = ['All', 'UPI', 'Credit Card', 'Debit Card', 'Wallet', 'Net Banking'];
  types   = ['All', 'debit', 'credit'];

  sourceColors: Record<string, string> = {
    'UPI': '#7c6af7', 'Credit Card': '#e05c7a',
    'Debit Card': '#3de8b0', 'Wallet': '#f5a623', 'Net Banking': '#60c7f8'
  };

  filtered = computed(() => {
    return this.data.transactions().filter(t => {
      const q = this.searchQuery().toLowerCase();
      const matchSearch = t.name.toLowerCase().includes(q) || t.category.toLowerCase().includes(q);
      const matchSource = this.selectedSource() === 'All' || t.source === this.selectedSource();
      const matchType   = this.selectedType()   === 'All' || t.type   === this.selectedType();
      return matchSearch && matchSource && matchType;
    });
  });

  setSource(s: string) { this.selectedSource.set(s); }
  setType(t: string)   { this.selectedType.set(t); }
  onSearch(e: Event)   { this.searchQuery.set((e.target as HTMLInputElement).value); }

  totalDebit = computed(() =>
    this.filtered().filter(t => t.type === 'debit').reduce((s, t) => s + t.amount, 0)
  );
}