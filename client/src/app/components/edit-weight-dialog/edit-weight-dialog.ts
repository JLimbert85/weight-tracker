import { Component, inject, signal } from '@angular/core';
import {
  MatDialogTitle,
  MatDialogContent,
  MatDialogActions,
  MatDialogClose,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { provideNativeDateAdapter } from '@angular/material/core';
import { Weight } from '../../interfaces/weight';
import { WeightService } from '../../services/weight-service';
import { MatIcon } from '@angular/material/icon';

@Component({
  imports: [
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatDialogClose,
    MatDatepickerModule,
    MatIcon,
  ],
  providers: [provideNativeDateAdapter()],
  selector: 'app-edit-weight-dialog',
  styleUrl: './edit-weight-dialog.css',
  templateUrl: './edit-weight-dialog.html',
})
export class EditWeightDialog {
  readonly dialogRef = inject(MatDialogRef<EditWeightDialog>);
  data = inject(MAT_DIALOG_DATA) as { weight: Weight };
  readonly date = new FormControl(new Date());
  readonly maxDate = new Date();
  weight = signal('');
  weightService = inject(WeightService);
  confirmDelete = signal(false);

  constructor() {
    this.date.setValue(this.data.weight.recordedDate);
    this.weight.set(this.data.weight.weight.toString());
  }

  onSubmit(): void {
    let updatedWeight: Weight = {
      _id: this.data.weight._id,
      weight: Number.parseInt(this.weight()),
      recordedDate: this.date.value || new Date(),
    };

    this.weightService.updateWeight(updatedWeight);
    this.dialogRef.close();
  }

  onDelete(): void {
    this.confirmDelete.set(true);
  }

  onCancelDelete(): void {
    this.confirmDelete.set(false);
  }

  onConfirmDelete(): void {
    this.weightService.deleteWeight(this.data.weight._id);
    this.dialogRef.close();
  }
}
