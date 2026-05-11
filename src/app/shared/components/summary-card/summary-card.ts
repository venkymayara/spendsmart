import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-summary-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './summary-card.html',
  styleUrls: ['./summary-card.scss']
})
export class SummaryCardComponent {
  @Input() label = '';
  @Input() value = '';
  @Input() sub = '';
  @Input() tag = '';
  @Input() tagType: 'good' | 'warn' | 'bad' = 'good';
  @Input() accentColor = '#7c6af7';
}