import { Component, Input } from '@angular/core';
import { Chat } from '../../models/chat/chat.model';

@Component({
  selector: 'app-messages-item-list',
  standalone: false,
  templateUrl: './messages-item-list.component.html',
  styleUrl: './messages-item-list.component.scss'
})
export class MessagesItemListComponent {
  @Input({ required: true }) public chat!: Chat;
}
