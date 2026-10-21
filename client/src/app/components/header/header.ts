import { Component, inject, viewChild } from '@angular/core';
import { MatDividerModule } from '@angular/material/divider';
import { MatDialog } from '@angular/material/dialog';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatExpIconButton } from '@ngm-dev/mat-exp';
import { MatMenuModule, MatMenuTrigger } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { AuthenticationService } from '../../services/authentication-service';
import { Router } from '@angular/router';
import { MeasurementsDialog } from '../measurements-dialog/measurements-dialog';

@Component({
  imports: [
    MatToolbarModule,
    MatButtonModule,
    MatExpIconButton,
    MatIconModule,
    MatMenuModule,
    MatDividerModule,
  ],
  selector: 'app-header',
  styleUrl: './header.css',
  templateUrl: './header.html',
})
export class Header {
  authService = inject(AuthenticationService);
  router = inject(Router);
  menuTrigger = viewChild.required(MatMenuTrigger);
  settingsDialog = inject(MatDialog);

  onLogout(): void {
    this.authService.logout();
    this.router.navigateByUrl('/login');
  }

  onSettings(): void {
    const measurementsDialogRef = this.settingsDialog.open(MeasurementsDialog, {
      restoreFocus: false,
    });

    // Manually restore focus to the menu trigger since the element that
    // opens the dialog won't be in the DOM any more when the dialog closes.
    measurementsDialogRef.afterClosed().subscribe(() => this.menuTrigger().focus());
  }
}
