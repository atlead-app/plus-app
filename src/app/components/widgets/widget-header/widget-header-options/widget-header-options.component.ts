import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-widget-header-options',
  standalone: false,
  templateUrl: './widget-header-options.component.html',
  styleUrl: './widget-header-options.component.scss'
})
export class WidgetHeaderOptionsComponent {
  
  @Input({ required: true }) header!: any;

}
