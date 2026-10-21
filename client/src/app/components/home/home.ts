import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, effect, inject, signal } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AuthenticationService } from '../../services/authentication-service';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatGridListModule } from '@angular/material/grid-list';
import { ProgressBarCard } from '../progress-bar-card/progress-bar-card';
import { OverviewCard } from '../overview-card/overview-card';
import { AddWeightButton } from '../add-weight-button/add-weight-button';
import { HistoryList } from '../history-list/history-list';
import { Router } from '@angular/router';
import { WeightService } from '../../services/weight-service';
import { HistoryChart } from '../history-chart/history-chart';

@Component({
  imports: [
    MatIconModule,
    MatTabsModule,
    MatToolbarModule,
    MatGridListModule,
    ProgressBarCard,
    OverviewCard,
    AddWeightButton,
    HistoryList,
    HistoryChart,
  ],
  selector: 'app-home',
  styleUrl: './home.css',
  templateUrl: './home.html',
})
export class Home {
  authService = inject(AuthenticationService);
  weightService = inject(WeightService);
  loginDialog = inject(MatDialog);
  router = inject(Router);
  isMobile = signal(false);
  navOpen = signal(false);
  selectedNavItem = signal('Home');
  navItems = ['Home', 'History'];

  constructor(private breakpointObserver: BreakpointObserver) {
    this.breakpointObserver
      .observe([Breakpoints.XSmall, Breakpoints.Small, Breakpoints.Handset, Breakpoints.Tablet])
      .subscribe((result) => {
        this.isMobile.set(result.matches);
      });

    effect(() => {
      if (!this.authService.isLoggedIn()) {
        this.router.navigateByUrl('/login');
      }
    });
  }

  ngOnInit(): void {
    if (!this.authService.isLoggedIn()) {
      console.log('User is not logged in');
      this.router.navigateByUrl('/login');
    } else {
      this.weightService.getUser(this.authService.getCurrentUserId());
      this.weightService.getWeights();
    }
  }

  onSelectNavItem = (selectedItem: string) => {
    this.selectedNavItem.set(selectedItem);
    this.navOpen.set(false);
  };
}
