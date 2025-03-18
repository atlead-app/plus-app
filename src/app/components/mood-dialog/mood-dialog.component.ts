import { Component } from '@angular/core';

@Component({
  selector: 'app-mood-dialog',
  standalone: false,
  templateUrl: './mood-dialog.component.html',
  styleUrl: './mood-dialog.component.scss'
})
export class MoodDialogComponent {
  public visible: boolean = true;
  public dontAskAgain: boolean = false;
}
