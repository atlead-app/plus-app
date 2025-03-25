import { Component, Input } from '@angular/core';
import { Widget } from '../../../models/widget/widget.model';

@Component({
  selector: 'app-widget-header',
  standalone: false,
  templateUrl: './widget-header.component.html',
  styleUrl: './widget-header.component.scss'
})
export class WidgetHeaderComponent {

  @Input({ required: true }) widget!: Widget;

}
