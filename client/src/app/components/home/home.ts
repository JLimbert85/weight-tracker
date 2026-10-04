import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, computed, inject, signal } from '@angular/core';
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
import { MatButton } from '@angular/material/button';
import { HistoryChart } from '../history-chart/history-chart';

@Component({
  imports: [
    MatIconModule,
    MatTabsModule,
    MatToolbarModule,
    MatGridListModule,
    MatButton,
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
  navItems = ['Home', 'History', 'Settings'];

  // weights = computed(() => this.weightService.weights());
  userId = this.authService.getCurrentUserId();
  // goalWeight = computed(() => this.weightService.user()?.goalWeight);
  // startWeight = computed(() => this.weightService.weights().at(-1)?.weight);
  // currentWeight = computed(() => this.weightService.weights().at(0)?.weight);
  // startDate = computed(() =>
  //   new Date(this.weightService.weights().at(-1)?.recordedDate || '').toDateString(),
  // );

  constructor(private breakpointObserver: BreakpointObserver) {
    this.breakpointObserver
      .observe([Breakpoints.XSmall, Breakpoints.Small, Breakpoints.Handset, Breakpoints.Tablet])
      .subscribe((result) => {
        this.isMobile.set(result.matches);
      });
  }

  ngOnInit(): void {
    if (!this.authService.isLoggedIn()) {
      this.router.navigateByUrl('/login');
    }
    this.weightService.getUser(this.userId);
    this.weightService.getWeights();
  }

  onSelectNavItem = (selectedItem: string) => {
    this.selectedNavItem.set(selectedItem);
    this.navOpen.set(false);
  };
}
