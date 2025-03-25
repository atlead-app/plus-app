import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { providePrimeNG } from 'primeng/config';
import { preset } from './static/default';

import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { GridstackModule, GridstackComponent } from 'gridstack/dist/angular';

import { ButtonModule } from 'primeng/button';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { SelectButtonModule } from 'primeng/selectbutton';
import { AvatarModule } from 'primeng/avatar';
import { AvatarGroupModule } from 'primeng/avatargroup';
import { DialogModule } from 'primeng/dialog';
import { TooltipModule } from 'primeng/tooltip';
import { ToggleSwitchModule } from 'primeng/toggleswitch';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { InputIcon } from 'primeng/inputicon';
import { IconField } from 'primeng/iconfield';
import { InputTextModule } from 'primeng/inputtext';
import { TextareaModule } from 'primeng/textarea';
import { MenuModule } from 'primeng/menu';
import { ConfirmPopupModule } from 'primeng/confirmpopup';
import { ToastModule } from 'primeng/toast';
import { DatePickerModule } from 'primeng/datepicker';

import { ConfirmationService, MessageService } from 'primeng/api';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HeaderComponent } from './components/header/header.component';
import { DashboardComponent } from './routes/dashboard/dashboard.component';
import { MessagesComponent } from './routes/messages/messages.component';
import { SelectEntityComponent } from './components/select-entity/select-entity.component';
import { EntityCollaboratorsComponent } from './components/entity-collaborators/entity-collaborators.component';
import { EntityAvatarComponent } from './components/entity-avatar/entity-avatar.component';
import { SelectUserComponent } from './components/select-user/select-user.component';
import { UserAvatarComponent } from './components/user-avatar/user-avatar.component';
import { SidebarAdvertisementComponent } from './components/sidebar-advertisement/sidebar-advertisement.component';
import { MoodDialogComponent } from './components/mood-dialog/mood-dialog.component';
import { MoodPickerComponent } from './components/mood-picker/mood-picker.component';
import { NavItemSidebarComponent } from './components/nav-item-sidebar/nav-item-sidebar.component';
import { MessagesListComponent } from './components/messages-list/messages-list.component';
import { MessagesChatComponent } from './components/messages-chat/messages-chat.component';
import { MessagesInfosComponent } from './components/messages-infos/messages-infos.component';
import { MessagesItemListComponent } from './components/messages-item-list/messages-item-list.component';
import { MessagesChatHeaderComponent } from './components/messages-chat-header/messages-chat-header.component';
import { MessagesChatBodyComponent } from './components/messages-chat-body/messages-chat-body.component';
import { MessagesChatFooterComponent } from './components/messages-chat-footer/messages-chat-footer.component';
import { BaseGridstackItemComponent } from './components/base-gridstack-item/base-gridstack-item.component';

import { WidgetHeaderComponent } from './components/widgets/widget-header/widget-header.component';
import { WidgetHeaderOptionsComponent } from './components/widgets/widget-header/widget-header-options/widget-header-options.component';
import { WidgetHeaderOptionsSelectComponent } from './components/widgets/widget-header/widget-header-options/widget-header-options-select/widget-header-options-select.component';
import { WidgetHeaderOptionsMenuComponent } from './components/widgets/widget-header/widget-header-options/widget-header-options-menu/widget-header-options-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    HeaderComponent,
    DashboardComponent,
    MessagesComponent,
    SelectEntityComponent,
    EntityCollaboratorsComponent,
    EntityAvatarComponent,
    SelectUserComponent,
    UserAvatarComponent,
    SidebarAdvertisementComponent,
    MoodDialogComponent,
    MoodPickerComponent,
    NavItemSidebarComponent,
    MessagesListComponent,
    MessagesChatComponent,
    MessagesInfosComponent,
    MessagesItemListComponent,
    MessagesChatHeaderComponent,
    MessagesChatBodyComponent,
    MessagesChatFooterComponent,
    BaseGridstackItemComponent,

    WidgetHeaderComponent,
    WidgetHeaderOptionsComponent,
    WidgetHeaderOptionsSelectComponent,
    WidgetHeaderOptionsMenuComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,

    GridstackModule,

    ButtonModule,
    ToggleButtonModule,
    SelectButtonModule,
    AvatarModule,
    AvatarGroupModule,
    DialogModule,
    TooltipModule,
    ToggleSwitchModule,
    IconFieldModule,
    InputIconModule,
    InputIcon,
    IconField,
    InputTextModule,
    TextareaModule,
    MenuModule,
    ConfirmPopupModule,
    ToastModule,
    DatePickerModule
  ],
  providers: [
    provideAnimationsAsync(),
    providePrimeNG({
      theme: {
        preset: preset,
        options: {
          prefix: 'p',
          darkModeSelector: false,
          cssLayer: false
        }
      }
    }),
    ConfirmationService,
    MessageService
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {
    GridstackComponent.addComponentToSelectorType([BaseGridstackItemComponent]);
  }
}
