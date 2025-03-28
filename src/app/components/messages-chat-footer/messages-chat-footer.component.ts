import { Component } from '@angular/core';

@Component({
  selector: 'app-messages-chat-footer',
  standalone: false,
  templateUrl: './messages-chat-footer.component.html',
  styleUrl: './messages-chat-footer.component.scss'
})
export class MessagesChatFooterComponent {
  
  public message: string = '';

  public sendMessage(): void {
    console.log(this.message);
    this.message = '';
  }
}
