import { Component } from '@angular/core';
import { Chat } from '../../models/chat/chat.model';

@Component({
  selector: 'app-messages-list',
  standalone: false,
  templateUrl: './messages-list.component.html',
  styleUrl: './messages-list.component.scss'
})
export class MessagesListComponent {
  public searchChat: string = '';

  public chats: Chat[] = [
    new Chat(1, 'John Doe', 'contact'),
    new Chat(2, 'Atlead', 'group'),
    new Chat(3, 'Marie Bonnet'),
    new Chat(4, 'Thomas Lemaire', 'contact'),
    new Chat(5, 'Movida', 'group'),
    new Chat(6, 'Jean Dupont', 'contact'),
    new Chat(7, 'Alexandrie Pelland', 'contact'),
    new Chat(8, 'Anton Clément', 'contact'),
    new Chat(9, 'Merle Trudeau', 'contact'),
    new Chat(10, 'Jane Marchal'),
    new Chat(11, 'Ranger Coudert', 'contact'),
    new Chat(12, 'Angelette Huot', 'contact'),
    new Chat(13, 'Varden Lachapelle'),
    new Chat(14, 'Fayette Mercier'),
    new Chat(15, 'Burkett Saucier'),
    new Chat(16, 'Philip Faure', 'contact'),
    new Chat(17, 'Aceline Grondin', 'contact'),
    new Chat(18, 'Zerbino Lauzier'),
  ];

  public listTypeMessages: string = 'all';
  public listOptionsMessages: any[] = [
    { label: 'Tous', value: 'all' },
    { label: 'Contacts', value: 'contacts' },
    { label: 'Groupes', value: 'groups' }
  ];

  public filterChats(): Chat[] {
    return this.chats.filter(chat => {
      if (this.listTypeMessages === 'contacts') 
        return chat.getType() === 'contact' && chat.getName().toLowerCase().includes(this.searchChat.toLowerCase());
      else if (this.listTypeMessages === 'groups')
        return chat.getType() === 'group' && chat.getName().toLowerCase().includes(this.searchChat.toLowerCase());
      else
        return chat.getName().toLowerCase().includes(this.searchChat.toLowerCase());
    });
  }

  public resetSearchChat(): void {
    this.searchChat = '';
  }
}
