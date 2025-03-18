import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-entity-avatar',
  standalone: false,
  templateUrl: './entity-avatar.component.html',
  styleUrl: './entity-avatar.component.scss'
})
export class EntityAvatarComponent {
  @Input() size: string = '70px';
}
