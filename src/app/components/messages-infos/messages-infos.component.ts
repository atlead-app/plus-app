import { Component } from '@angular/core';

@Component({
  selector: 'app-messages-infos',
  standalone: false,
  templateUrl: './messages-infos.component.html',
  styleUrl: './messages-infos.component.scss'
})
export class MessagesInfosComponent {
  public infosMediasMessages: string = 'medias';
  public mediasOptionsMessages: any[] = [
    { label: 'Medias', value: 'medias' },
    { label: 'Liens', value: 'links' },
    { label: 'Docs', value: 'docs' }
  ];
}
