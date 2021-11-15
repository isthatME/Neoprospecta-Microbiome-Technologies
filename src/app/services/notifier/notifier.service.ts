import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NotifierComponent } from 'src/app/components/notifier/notifier.component';

@Injectable({
  providedIn: 'root'
})
export class NotifierService {

  constructor(private snackBar: MatSnackBar) { }

  showNotification(displayMessage: string, buttonText: string, messageType: 'error' | 'success' | 'warn'){
    this.snackBar.openFromComponent(NotifierComponent,{
      data: {
        message: displayMessage,
        buttonText: buttonText,
        type: messageType
      },
      duration: 1000,
      horizontalPosition: "right",
      verticalPosition: "top",
      panelClass: messageType,
    })
  }
}
