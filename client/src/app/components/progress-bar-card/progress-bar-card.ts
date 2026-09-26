import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

@Component({
  imports: [MatCardModule],
  selector: 'app-progress-bar-card',
  styleUrl: './progress-bar-card.css',
  templateUrl: './progress-bar-card.html',
})
export class ProgressBarCard {
  @Input() progress: number = 50;

  radius: number = 40;
  circumference: number = Math.PI * this.radius; // Circumference of the half circle

  get strokeDashoffset(): number {
    const progressValue = Math.min(Math.max(this.progress, 0), 100);
    return this.circumference - (progressValue / 100) * this.circumference;
  }
}
