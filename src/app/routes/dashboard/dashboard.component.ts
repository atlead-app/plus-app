import { Component } from '@angular/core';
import { NgGridStackOptions } from 'gridstack/dist/angular';

@Component({
  selector: 'app-dashboard',
  standalone: false,
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

  public gridstackOptions: NgGridStackOptions = {
    column: 12,
    cellHeight: "64px",
    margin: ".75rem",
    minRow: 1,
    acceptWidgets: true,
    float: true,
    children: [
      { x: 0, y: 0, w: 2, h: 2, noResize: true, selector: 'app-base-gridstack-item', input: { data: 'customers', type: 'card' } },
      { x: 0, y: 0, w: 2, h: 2, noResize: true, selector: 'app-base-gridstack-item', input: { data: 'wallet', type: 'card' } },
    ]
  };

  public onGridstackChange(event: any) {
    console.log('Gridstack change', event);
  }

}
