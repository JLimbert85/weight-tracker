import { Component, Input } from '@angular/core';
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

  // Calculate the progress percentage based on the start, current, and goal weights
  // This is used to update the visual representation of the progress bar in the UI
  // The progress value is clamped between 0 and 100 to ensure it stays within the valid range for the UI.
  progress = () => {
    if (
      this.startWeight != undefined &&
      this.currentWeight != undefined &&
      this.goalWeight != undefined
    ) {
      const rawProgress =
        ((this.startWeight - this.currentWeight) / (this.startWeight - this.goalWeight)) * 100;
      return Math.min(Math.max(rawProgress, 0), 100); // Clamp the progress value between 0 and 100
    } else {
      return 0;
    }
  };

  // Helper methods to format the display text for the start and goal weights in the progress bar card
  // These methods ensure that the values are displayed in a user-friendly manner, handling undefined values and adding appropriate units.
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
  // Properties for the SVG circle used in the progress bar
  // The radius and circumference are used to calculate the stroke dash offset for the progress bar.
  radius: number = 40;
  circumference: number = Math.PI * this.radius;

  // The stroke dash offset is calculated based on the progress value and the circumference of the half circle.
  // This ensures that the visual representation of the progress bar accurately reflects the user's progress towards their goal weight.
  get strokeDashoffset(): number {
    const progressValue = Math.min(Math.max(this.progress(), 0), 100);
    return this.circumference - (progressValue / 100) * this.circumference;
  }
}
