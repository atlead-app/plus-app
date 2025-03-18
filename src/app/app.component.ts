import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.scss'
})
export class AppComponent {
  public checked: boolean = false;

  stateOptions: any[] = [{ label: 'Jour', value: 'day' },{ label: 'Mois', value: 'month' },{ label: 'Année', value: 'year' }];
  public value: string = "month";
}
