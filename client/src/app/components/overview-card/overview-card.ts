import { Component, inject, Input, signal } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { AuthenticationService } from '../../services/authentication-service';

@Component({
  imports: [MatCardModule],
  selector: 'app-overview-card',
  styleUrl: './overview-card.css',
  templateUrl: './overview-card.html',
})
export class OverviewCard {
  @Input() lossTarget: number | undefined;
  @Input() lostSoFar: number | undefined;
  @Input() leftToLose: number | undefined;
  @Input() startDate: string | undefined;

  lossTargetText = () => {
    if (this.lossTarget === undefined) {
      return 'N/A';
    }
    return this.lossTarget + ' lbs';
  };

  lostSoFarText = () => {
    if (this.lostSoFar === undefined) {
      return 'N/A';
    }
    return this.lostSoFar + ' lbs';
  };

  leftToLoseText = () => {
    if (this.leftToLose === undefined) {
      return 'N/A';
    }
    return this.leftToLose + ' lbs';
  };

  startDateText = () => {
    if (this.startDate === undefined) {
      return 'N/A';
    }
    return this.startDate;
  };
}
