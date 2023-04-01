import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
import { MatConfirmDialogComponent } from '../general_components/mat-confirm-dialog/mat-confirm-dialog.component';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(
    private snackBar: MatSnackBar,
    private dialog: MatDialog) { }

  config: MatSnackBarConfig = {
    duration: 1000,
    horizontalPosition: 'center',
    verticalPosition: 'bottom',
  }

  success(msg: string)
  {
    this.config['panelClass'] = ['notification', 'success', 'blue-snackbar'];
    this.snackBar.open(msg, '', this.config);
  }

  warn(msg: string)
  {
    this.config['panelClass'] = ['notification', 'warn', 'red-snackbar'];
    this.snackBar.open(msg, '', this.config);
  }

  openConfirmDialog(msg: string)
  {
    return this.dialog.open(MatConfirmDialogComponent, {
      width: '390px',
      panelClass: 'confirm-dialog-container',
      disableClose: true,
      position: { top: '10px'},
      data: {
        message: msg
      }
    });
  }
}
