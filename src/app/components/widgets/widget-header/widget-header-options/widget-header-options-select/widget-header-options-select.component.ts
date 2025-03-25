import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-widget-header-options-select',
  standalone: false,
  templateUrl: './widget-header-options-select.component.html',
  styleUrl: './widget-header-options-select.component.scss'
})
export class WidgetHeaderOptionsSelectComponent {

  @Input({ required: true }) options!: any[];
  @Input({ required: true }) selected!: string;

}
