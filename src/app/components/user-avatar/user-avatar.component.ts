import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-user-avatar',
  standalone: false,
  templateUrl: './user-avatar.component.html',
  styleUrl: './user-avatar.component.scss'
})
export class UserAvatarComponent {
  @Input() size: string = '70px';
}
