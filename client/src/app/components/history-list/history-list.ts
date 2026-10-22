import { Component, Input } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { Weight } from '../../interfaces/weight';
import { HistoryListItem } from '../history-list-item/history-list-item';

@Component({
  imports: [MatListModule, HistoryListItem],
  selector: 'app-history-list',
  styleUrl: './history-list.css',
  templateUrl: './history-list.html',
})
export class HistoryList {
  @Input() weights: Weight[] = [];

  // Determine the icon to display for a given weight compared to the next weight
  // Returns 'equal' if weights are the same, 'arrow_upward' if the current weight is greater,
  // 'arrow_downward' if the current weight is less, and '' if there is no next weight.
  setIcon = (weight: Weight, nextWeight?: Weight) => {
    if (nextWeight === undefined) {
      return '';
    }
    if (weight.weight === nextWeight.weight) {
      return 'equal';
    }
    return weight.weight > nextWeight.weight ? 'arrow_upward' : 'arrow_downward';
  };
}
