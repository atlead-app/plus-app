import { Component } from '@angular/core';
import { NgGridStackOptions } from 'gridstack/dist/angular';
import { Widget } from '../../models/widget/widget.model';

@Component({
  selector: 'app-dashboard',
  standalone: false,
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

  private _widgetsOptionsBase: any = {
    selector: 'app-base-gridstack-item',
  };

  private _widgets: Widget[] = [
    new Widget(
      { id: "customers", dragable: true, position: { x: 0, y: 0 }, size: { w: 3, h: 5 }, ...this._widgetsOptionsBase },
      { visible: true, select: { options: [{ label: 'Tous', value: 'all' }, { label: 'Actif', value: 'activate' }], selected: 'all'} }
    ),
    new Widget(
      { id: "Collaborators", dragable: true, position: { x: 3, y: 0 }, size: { w: 3, h: 5 }, ...this._widgetsOptionsBase },
      { visible: true, datePicker: true }
    ),
    new Widget({ id: "wallet", dragable: true, position: { x: 6, y: 0 }, size: { w: 2, h: 1 }, ...this._widgetsOptionsBase }, { visible: true }),
  ];

  public gridstackOptions: NgGridStackOptions = {
    column: 10,
    cellHeight: "128px",
    margin: ".75rem",
    minRow: 1,
    acceptWidgets: true,
    float: true,
    children: this._widgets.map((widget: Widget) => widget.toGridstackItem()),
  };

  public onGridstackChange(event: any) {
    console.log('Gridstack change', event);
  }

}
