import { Component, inject, Input, OnDestroy, OnInit } from '@angular/core';
import { BaseWidget } from 'gridstack/dist/angular';
import { ConfirmationService, MenuItem, MenuItemCommandEvent, MessageService } from 'primeng/api';

@Component({
  selector: 'app-base-gridstack-item',
  standalone: false,
  templateUrl: './base-gridstack-item.component.html',
  styleUrl: './base-gridstack-item.component.scss'
})
export class BaseGridstackItemComponent extends BaseWidget implements OnInit, OnDestroy {

  @Input({ required: true }) data!: string;
  @Input({ required: true }) type!: string;

  private confirmationService: ConfirmationService = inject(ConfirmationService);
  private messageService: MessageService = inject(MessageService);

  ngOnDestroy() { }

  items: MenuItem[] | undefined;

  ngOnInit() {
    this.items = [
      {
        label: 'Options',
        items: [
          {
            label: 'Rafraichir',
            icon: 'pi pi-refresh'
          },
          {
            label: 'Exporter',
            icon: 'pi pi-upload'
          },
          {
            label: 'Modifier',
            icon: 'pi pi-pencil'
          },
          {
            label: 'Supprimer',
            icon: 'pi pi-trash',
            command: (event) => this.deleteConfirm(event)
          }
        ]
      }
    ];
  }

public deleteConfirm(event: MenuItemCommandEvent) {
    this.confirmationService.confirm({
        target: event.originalEvent?.target as EventTarget,
        message: 'Êtes vous sûre de supprimer ce widget?',
        icon: 'pi pi-exclamation-triangle',
        rejectButtonProps: {
            label: 'Annuler',
            severity: 'secondary',
            outlined: true
        },
        acceptButtonProps: {
            label: 'Supprimer'
        },
        accept: () => {
            this.messageService.add({ severity: 'info', summary: 'Suppression validée', detail: 'Vous avez supprimer le widget.', life: 2000 });
        }
    });
}

}
