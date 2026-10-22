import { Component, inject, signal } from '@angular/core';
import { WeightService } from '../../services/weight-service';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import {
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle,
} from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { HeightInputComponent } from '../height-input/height-input';

@Component({
  imports: [
    FormsModule,
    MatButtonModule,
    MatDialogActions,
    MatDialogClose,
    MatDialogContent,
    MatDialogTitle,
    MatFormFieldModule,
    MatInputModule,
    HeightInputComponent,
  ],
  selector: 'app-measurements-dialog',
  styleUrl: './measurements-dialog.css',
  templateUrl: './measurements-dialog.html',
})
export class MeasurementsDialog {
  dialogRef = inject(MatDialogRef<MeasurementsDialog>);
  weightService = inject(WeightService);
  height = signal({ feet: 0, inches: 0 });
  goalWeight = signal(0);

  constructor() {
    // Initialize the height and goal weight signals with existing values from the weight service if available
    // This ensures that the dialog reflects the current user's measurements when it is opened
    if (this.weightService.goalWeight() !== undefined) {
      this.goalWeight.set(this.weightService.goalWeight()!);
    }
    if (this.weightService.heightInInches() !== undefined) {
      const heightInInches = this.weightService.heightInInches()!;
      const feet = Math.floor(heightInInches / 12);
      const inches = heightInInches % 12;
      this.height.set({ feet, inches });
    }
  }

  // Handle the save action when the save button is clicked
  // Update the user's height and goal weight if they have changed
  // This ensures that the changes are only sent to the server if there are actual modifications
  onSave(): void {
    const { feet, inches } = this.height();
    const heightInInches = feet * 12 + inches;
    if (this.weightService.user() === undefined) {
      return;
    } else {
      const user = this.weightService.user()!;
      if (this.weightService.heightInInches() !== heightInInches) {
        this.weightService.updateHeight(user, heightInInches);
      }
      if (this.weightService.goalWeight() !== this.goalWeight()) {
        this.weightService.updateGoalWeight(user, this.goalWeight());
      }
    }
    this.dialogRef.close();
  }
}
