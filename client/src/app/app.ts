import { Component, signal } from '@angular/core';
import { ProgressBarCard } from './components/progress-bar-card/progress-bar-card';
import { MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatButtonModule } from '@angular/material/button';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { OverviewCard } from './components/overview-card/overview-card';
import { AddWeightButton } from './components/add-weight-button/add-weight-button';
import { HistoryList } from './components/history-list/history-list';

@Component({
  imports: [
    ProgressBarCard,
    MatTabsModule,
    MatIconModule,
    MatToolbarModule,
    MatGridListModule,
    MatButtonModule,
    OverviewCard,
    AddWeightButton,
    HistoryList,
  ],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  isMobile = signal(false);
  navOpen = signal(false);
  selectedNavItem = signal('Home');
  navItems = ['Home', 'History', 'Settings'];

  constructor(private breakpointObserver: BreakpointObserver) {
    this.breakpointObserver
      .observe([Breakpoints.XSmall, Breakpoints.Small, Breakpoints.Handset, Breakpoints.Tablet])
      .subscribe((result) => {
        this.isMobile.set(result.matches);
      });
  }

  onSelectNavItem = (selectedItem: string) => {
    this.selectedNavItem.set(selectedItem);
    this.navOpen.set(false);
  };
}
