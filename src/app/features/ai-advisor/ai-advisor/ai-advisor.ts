import { Component, inject, signal, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AnthropicService } from '../../../services/anthropic';
import { DataService } from '../../../services/data';
import { AiMessage } from '../../../core/models/ai-insight';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-ai-advisor',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  templateUrl: './ai-advisor.html',
  styleUrls: ['./ai-advisor.scss']
})
export class AiAdvisorComponent implements OnInit {
  private ai   = inject(AnthropicService);
  private data = inject(DataService);

  messages  = signal<AiMessage[]>([]);
  loading   = signal(false);
  inputText = signal('');

  suggestions = [
    'Where can I save the most this month?',
    'Am I overspending on food?',
    'How does my savings rate compare?',
    'Which subscription should I cancel first?'
  ];

  private get systemPrompt(): string {
    const cats = this.data.spendByCategory.map(c => `${c.name}: ₹${c.amount}`).join(', ');
    return `You are a helpful personal finance advisor for an Indian user.
Their May 2025 data: Income ₹${this.data.totalIncome} | Total Spend ₹${this.data.totalSpent} | Savings ₹${this.data.totalSavings} (${this.data.savingsRate}% rate).
Category breakdown: ${cats}.
Recent transactions: Swiggy ₹485, Ola ₹620, Netflix ₹649, DMart ₹2340, Myntra ₹3200, Starbucks ₹590.
Answer in plain, friendly language. Use ₹ for amounts. Be specific. Keep responses under 150 words.`;
  }

  ngOnInit() { this.loadInitialInsight(); }

  loadInitialInsight() {
    this.loading.set(true);
    const prompt = 'Give me a brief 3-sentence overview of my spending health this month, one concern, and one actionable tip.';
    this.ai.ask([{ role: 'user', content: prompt }], this.systemPrompt)
      .subscribe({
        next: text => {
          this.messages.set([
            { role: 'user', content: prompt },
            { role: 'assistant', content: text }
          ]);
          this.loading.set(false);
        },
        error: () => {
          this.messages.set([{ role: 'assistant', content: 'Could not load insights. Please check your API key.' }]);
          this.loading.set(false);
        }
      });
  }

  send(text?: string) {
    const content = text || this.inputText().trim();
    if (!content || this.loading()) return;
    this.inputText.set('');
    const newMessages: AiMessage[] = [...this.messages(), { role: 'user', content }];
    this.messages.set(newMessages);
    this.loading.set(true);
    this.ai.ask(newMessages, this.systemPrompt).subscribe({
      next: reply => {
        this.messages.update(m => [...m, { role: 'assistant', content: reply }]);
        this.loading.set(false);
      },
      error: () => {
        this.messages.update(m => [...m, { role: 'assistant', content: 'Something went wrong. Try again.' }]);
        this.loading.set(false);
      }
    });
  }

  onKey(e: KeyboardEvent) { if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); this.send(); } }
  setInput(v: string)     { this.inputText.set(v); }
}