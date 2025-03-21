import { Component } from '@angular/core';
import { NavItemSidebar } from '../../models/nav-item-sidebar/nav-item-sidebar.model';

@Component({
  selector: 'app-sidebar',
  standalone: false,
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {

  public navItems: NavItemSidebar[] = [
    new NavItemSidebar('pi pi-chart-line', 'Dashboard', '/dashboard'),
    new NavItemSidebar('pi pi-comment', 'Messages', '/messages'),
    new NavItemSidebar('pi pi-user', 'Clients', '/customers'),
    new NavItemSidebar('pi pi-sparkles', 'Assistant', '/assistant'),
    new NavItemSidebar('pi pi-wallet', 'Portefeuille', '/wallet', [
      new NavItemSidebar('', 'Factures', '/invoices')
    ]),
    new NavItemSidebar('pi pi-building', 'Organisations', '/organizations', [
      new NavItemSidebar('', 'Atlead', '/1'),
      new NavItemSidebar('', 'Mypulse', '/2'),
      new NavItemSidebar('', 'Movida', '/3'),
    ]),
  ];

  public paramsItem: NavItemSidebar = new NavItemSidebar('pi pi-cog', 'Paramètres', '/settings');

}