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
    new NavItemSidebar('fa-solid fa-chart-line', 'Dashboard', '/dashboard'),
    new NavItemSidebar('fa-regular fa-message', 'Messages', '/messages'),
    new NavItemSidebar('fa-regular fa-user', 'Clients', '/customers'),
    new NavItemSidebar('fa-regular fa-wallet', 'Portefeuille', '/wallet', [
      new NavItemSidebar('', 'Factures', '/invoices')
    ]),
  ];

  public paramsItem: NavItemSidebar = new NavItemSidebar('fa-solid fa-gear', 'Paramètres', '/settings');

}
