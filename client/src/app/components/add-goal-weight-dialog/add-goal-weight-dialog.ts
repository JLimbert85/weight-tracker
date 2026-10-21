import { Component, inject, signal } from '@angular/core';
import { FormsModule, ReactiveFormsModule, FormControl } from '@angular/forms';
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
import { WeightService } from '../../services/weight-service';
import { Home } from '../home/home';
import { AuthenticationService } from '../../services/authentication-service';

@Component({
  imports: [
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatDialogActions,
    MatDialogClose,
    MatDialogContent,
    MatDialogTitle,
    MatFormFieldModule,
    MatInputModule,
  ],
  selector: 'app-add-goal-weight-dialog',
  styleUrl: './add-goal-weight-dialog.css',
  templateUrl: './add-goal-weight-dialog.html',
})
export class AddGoalWeightDialog {
  dialogRef = inject(MatDialogRef<Home>);
  weight = signal('');
  weightService = inject(WeightService);
  authService = inject(AuthenticationService);

  onSubmit(): void {
    console.log(this.weight(), this.weightService.user()!);
    this.weightService.updateGoalWeight(this.weightService.user()!, parseInt(this.weight()));
    this.dialogRef.close();
  }
}
