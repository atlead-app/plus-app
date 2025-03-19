import { Component } from '@angular/core';
import { BaseServices } from './components/base-services.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.scss'
})
export class AppComponent extends BaseServices {

  private readonly LAST_CONNECTION_KEY: string = 'last_connection';

  public isFirstConnectionToday: boolean = true;

  ngOnInit() {
    this.lastConnection();
  }

  private lastConnection(): void {
    let lastConnection: Date | null
      = this.storageService.getLocalStorageItem<Date>(this.LAST_CONNECTION_KEY);
    let now: Date = new Date();
    if (lastConnection) {
      lastConnection = new Date(lastConnection);
      this.isFirstConnectionToday 
        = !(lastConnection.getDate() === now.getDate() &&
          lastConnection.getMonth() === now.getMonth() &&
          lastConnection.getFullYear() === now.getFullYear());
    }
    this.storageService.setLocalStorageItem<Date>(this.LAST_CONNECTION_KEY, now);
  }
}
