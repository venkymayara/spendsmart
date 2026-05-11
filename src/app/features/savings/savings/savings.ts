import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Tip {
  icon: string;
  title: string;
  desc: string;
  save: string;
  tag: string;
}

@Component({
  selector: 'app-savings',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './savings.html',
  styleUrls: ['./savings.scss']
})
export class SavingsComponent {
  tips: Tip[] = [
    {
      icon: '☕',
      title: 'Cut back on café coffee',
      desc: 'You have spent ₹1,180 at Starbucks this month across 4 visits. Brewing at home 3 days a week brings that down significantly.',
      save: 'Save ~₹900/month',
      tag: 'Food & Dining'
    },
    {
      icon: '📦',
      title: 'Audit your subscriptions',
      desc: 'You are paying for Netflix, Amazon Prime and 2 others. Consider pausing ones you have not used in the past week.',
      save: 'Save ~₹650/month',
      tag: 'Subscriptions'
    },
    {
      icon: '🛍️',
      title: 'Shopping above budget',
      desc: 'Shopping is at 128% of your set budget. Set a 24-hour cooling-off rule before any non-essential purchase over ₹500.',
      save: 'Stay under ₹6,000 target',
      tag: 'Shopping'
    },
    {
      icon: '🚗',
      title: 'Mix your transit modes',
      desc: 'Replacing 3 of your 6 Ola rides with Metro or auto would cut transport costs without much inconvenience.',
      save: 'Save ~₹400/month',
      tag: 'Transport'
    },
    {
      icon: '⚡',
      title: 'Reduce peak-hour usage',
      desc: 'Running heavy appliances like washing machines and ACs during off-peak hours (11pm–6am) lowers your electricity bill.',
      save: 'Save ~₹200/month',
      tag: 'Utilities'
    },
    {
      icon: '🛒',
      title: 'Plan grocery trips weekly',
      desc: 'Shopping once a week with a fixed list reduces impulse buys. Your current grocery spend is on track — keep it up.',
      save: 'Maintain ₹2,500 target',
      tag: 'Groceries'
    }
  ];

  tagColors: Record<string, string> = {
    'Food & Dining': '#f5a623',
    'Subscriptions': '#fb7185',
    'Shopping': '#e05c7a',
    'Transport': '#7c6af7',
    'Utilities': '#3de8b0',
    'Groceries': '#34d399'
  };
}