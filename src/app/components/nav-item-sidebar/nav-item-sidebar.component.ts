import { Component, Input } from '@angular/core';
import { NavItemSidebar } from '../../models/nav-item-sidebar/nav-item-sidebar.model';

@Component({
  selector: 'app-nav-item-sidebar',
  standalone: false,
  templateUrl: './nav-item-sidebar.component.html',
  styleUrl: './nav-item-sidebar.component.scss'
})
export class NavItemSidebarComponent {

  @Input({ required: true }) public item!: NavItemSidebar;
  @Input() public parentLink?: string;

  public isOpen = false;

  toggleDropdown(): void {
    this.isOpen = !this.isOpen;
  }

  getLink(): string {
    return this.parentLink ? `${this.parentLink}${this.item.link}` : this.item.link;
  }

}