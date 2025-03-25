import { Component, inject } from '@angular/core';
import { ConfirmationService, MessageService, MenuItem, MenuItemCommandEvent } from 'primeng/api';

@Component({
  selector: 'app-widget-header-options-menu',
  standalone: false,
  templateUrl: './widget-header-options-menu.component.html',
  styleUrl: './widget-header-options-menu.component.scss'
})
export class WidgetHeaderOptionsMenuComponent {

  private confirmationService: ConfirmationService = inject(ConfirmationService);
  private messageService: MessageService = inject(MessageService);

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
