import { Component, inject, Input, OnDestroy, OnInit, signal } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { Weight } from '../../interfaces/weight';
import { WeightService } from '../../services/weight-service';
import { HistoryListItem } from '../history-list-item/history-list-item';
import { Subscription } from 'rxjs';

@Component({
  imports: [MatListModule, HistoryListItem],
  selector: 'app-history-list',
  styleUrl: './history-list.css',
  templateUrl: './history-list.html',
})
export class HistoryList {
  @Input() weights: Weight[] = [];
  // private sub!: Subscription;
  // protected weightService = inject(WeightService);

  // ngOnInit(): void {
  //   this.weightService.getWeights();
  // }

  // ngOnInit(): void {
  //   this.getWeights();
  //   this.sub = this.weightService.getChanges().subscribe((change) => {
  //     if (change.operationType === 'insert') {
  //       this.weights.set([...this.weights(), change.fullDocument]);
  // this.weights().sort(
  //   (a: Weight, b: Weight) =>
  //     new Date(b.recordedDate).getDate() - new Date(a.recordedDate).getDate(),
  // );
  //     }
  //   });
  // }

  // ngOnDestroy() {
  //   this.sub.unsubscribe();
  // }

  // private getWeights(): void {
  //   this.weightService.getWeights().subscribe({
  //     next: (value: Weight[]) => {
  //       this.weights.set(value);
  //       this.weights().sort(
  //         (a: Weight, b: Weight) =>
  //           new Date(b.recordedDate).getDate() - new Date(a.recordedDate).getDate(),
  //       );
  //     },
  //     error: (err) => {
  //       console.log('Error: ' + err);
  //     },
  //   });
  // }
}
