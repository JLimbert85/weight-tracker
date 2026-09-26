import { Component, computed, input } from '@angular/core';
import { Weight } from '../../interfaces/weight';
import { MatCard, MatCardContent } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';

@Component({
  imports: [MatCard, MatCardContent, MatButtonModule, MatIcon],
  selector: 'app-history-list-item',
  styleUrl: './history-list-item.css',
  templateUrl: './history-list-item.html',
})
export class HistoryListItem {
  weight = input.required<Weight>();

  formattedDate = computed(() => {
    const date = new Date(this.weight().recordedDate);
    return date.toDateString();
  });
}
