import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive, CommonModule],
  templateUrl: './app.html',
  styleUrls: ['./app.scss']
})
export class AppComponent {
  nav = [
    { path: '/dashboard',    label: 'Dashboard',     icon: '📊' },
    { path: '/transactions', label: 'Transactions',  icon: '💳' },
    { path: '/budgets',      label: 'Budgets',        icon: '🎯' },
    { path: '/savings',      label: 'Savings Tips',   icon: '💡' },
    { path: '/advisor',      label: 'AI Advisor',     icon: '✦'  },
  ];
}

export const App = AppComponent;