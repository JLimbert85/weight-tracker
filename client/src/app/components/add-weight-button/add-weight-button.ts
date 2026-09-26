import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { AddWeightDialog } from '../add-weight-dialog/add-weight-dialog';

@Component({
  imports: [MatButtonModule],
  selector: 'app-add-weight-button',
  styleUrl: './add-weight-button.css',
  templateUrl: './add-weight-button.html',
})
export class AddWeightButton {
  dialog = inject(MatDialog);

  onOpenAddWeightDialog(): void {
    this.dialog.open(AddWeightDialog);
  }
}
