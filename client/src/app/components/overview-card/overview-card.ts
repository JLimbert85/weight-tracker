import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

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
  @Input() heightInInches: number | undefined;
  @Input() BMI: number | undefined;

  // Helper methods to format the display text for various fields in the overview card
  // These methods ensure that the values are displayed in a user-friendly manner, handling undefined values and adding appropriate units or descriptions.
  heightInInchesText = () => {
    if (this.heightInInches === undefined) {
      return 'N/A';
    }
    return Math.floor(this.heightInInches / 12) + ' ft, ' + (this.heightInInches % 12) + ' in';
  };

  BMIText = () => {
    if (this.BMI === undefined) {
      return 'N/A';
    }
    if (this.BMI === undefined) {
      return 'N/A';
    } else if (this.BMI < 18.5) {
      return this.BMI.toFixed(1) + ' (Underweight)';
    } else if (this.BMI < 25) {
      return this.BMI.toFixed(1) + ' (Healthy Weight)';
    } else if (this.BMI < 30) {
      return this.BMI.toFixed(1) + ' (Overweight)';
    } else {
      return this.BMI.toFixed(1) + ' (Obese)';
    }
  };

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
