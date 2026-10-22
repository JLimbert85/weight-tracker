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
  arrowIcon = input<string>('');

  // Computed property to format the recorded date of the weight
  formattedDate = computed(() => {
    const date = new Date(this.weight().recordedDate);
    return date.toDateString();
  });

  // Computed property to determine the color of the arrow icon based on the direction of weight change
  // Returns 'red' for upward arrow, 'green' for downward arrow, and 'black' for equal or no arrow.
  iconColor = computed(() => {
    const icon = this.arrowIcon();
    if (icon === 'arrow_upward') {
      return 'red';
    }
    if (icon === 'arrow_downward') {
      return 'green';
    }
    return 'black';
  });

  // Handle the edit weight action when the edit button is clicked
  onEditWeight() {
    const dialogRef = this.dialog.open(EditWeightDialog, {
      data: { weight: this.weight() },
    });
  }
}
