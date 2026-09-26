import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

@Component({
  imports: [MatCardModule],
  selector: 'app-overview-card',
  styleUrl: './overview-card.css',
  templateUrl: './overview-card.html',
})
export class OverviewCard {}
