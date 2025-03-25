import { Component, Input, OnDestroy } from '@angular/core';
import { BaseWidget } from 'gridstack/dist/angular';
import { Widget } from '../../models/widget/widget.model';

@Component({
  selector: 'app-base-gridstack-item',
  standalone: false,
  templateUrl: './base-gridstack-item.component.html',
  styleUrl: './base-gridstack-item.component.scss'
})
export class BaseGridstackItemComponent extends BaseWidget implements OnDestroy {

  @Input({ required: true }) widget!: Widget;

  ngOnDestroy() { }

}
