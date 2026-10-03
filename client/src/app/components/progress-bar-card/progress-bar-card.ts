import { Component, computed, Input, signal } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

@Component({
  imports: [MatCardModule],
  selector: 'app-progress-bar-card',
  styleUrl: './progress-bar-card.css',
  templateUrl: './progress-bar-card.html',
})
export class ProgressBarCard {
  @Input() startWeight!: number | undefined;
  @Input() goalWeight!: number | undefined;
  @Input() currentWeight!: number | undefined;

  progress = () => {
    if (
      this.startWeight != undefined &&
      this.currentWeight != undefined &&
      this.goalWeight != undefined
    ) {
      return ((this.startWeight - this.currentWeight) / (this.startWeight - this.goalWeight)) * 100;
    } else {
      return 0;
    }
  };

  startWeightText = () => {
    if (this.startWeight != undefined) {
      return this.startWeight + ' Lbs';
    } else {
      return 'N/A';
    }
  };

  goalWeightText = () => {
    if (this.goalWeight != undefined) {
      return this.goalWeight + ' Lbs';
    } else {
      return 'N/A';
    }
  };

  radius: number = 40;
  circumference: number = Math.PI * this.radius; // Circumference of the half circle

  get strokeDashoffset(): number {
    const progressValue = Math.min(Math.max(this.progress(), 0), 100);
    return this.circumference - (progressValue / 100) * this.circumference;
  }
}
