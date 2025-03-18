import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-mood-picker',
  standalone: false,
  templateUrl: './mood-picker.component.html',
  styleUrl: './mood-picker.component.scss'
})
export class MoodPickerComponent {
  @Input({ required: true }) public mood!: string;
  @Input({ required: true }) public label!: string;
}
