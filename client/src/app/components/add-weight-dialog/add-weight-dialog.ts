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
import { MatDatepickerModule } from '@angular/material/datepicker';
import { provideNativeDateAdapter } from '@angular/material/core';
import { WeightService } from '../../services/weight-service';
import { Weight } from '../../interfaces/weight';
import { AddWeightButton } from '../add-weight-button/add-weight-button';

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
    MatDatepickerModule,
  ],
  providers: [provideNativeDateAdapter()],
  selector: 'app-add-weight-dialog',
  styleUrl: './add-weight-dialog.css',
  templateUrl: './add-weight-dialog.html',
})
export class AddWeightDialog {
  dialogRef = inject(MatDialogRef<AddWeightButton>);
  readonly date = new FormControl(new Date());
  readonly maxDate = new Date();
  weight = signal('');
  weightService = inject(WeightService);

  constructor() {
    this.date.setValue(new Date());
  }

  onSubmit(): void {
    let newWeight: Weight = {
      _id: '',
      weight: Number.parseInt(this.weight()),
      recordedDate: this.date.value || new Date(),
    };

    this.weightService.addWeight(newWeight);
    this.dialogRef.close();
  }
}
