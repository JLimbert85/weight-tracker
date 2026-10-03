import { Component, computed, inject, input } from '@angular/core';
import { Weight } from '../../interfaces/weight';
import { MatCard, MatCardContent } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { MatDialog } from '@angular/material/dialog';
import { EditWeightDialog } from '../edit-weight-dialog/edit-weight-dialog';

@Component({
  imports: [MatCard, MatCardContent, MatButtonModule, MatIcon],
  selector: 'app-history-list-item',
  styleUrl: './history-list-item.css',
  templateUrl: './history-list-item.html',
})
export class HistoryListItem {
  readonly dialog = inject(MatDialog);
  weight = input.required<Weight>();

  formattedDate = computed(() => {
    const date = new Date(this.weight().recordedDate);
    return date.toDateString();
  });

  onEditWeight() {
    const dialogRef = this.dialog.open(EditWeightDialog, {
      data: { weight: this.weight() },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        console.log('Weight updated:', result);
        // Handle the updated weight here, e.g., call a service to update it in the backend
      }
    });
  }
}
