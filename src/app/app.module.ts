import { NgModule } from '@angular/core';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { providePrimeNG } from 'primeng/config';
import { preset } from './static/theme';

import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { ButtonModule } from 'primeng/button';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { SelectButtonModule } from 'primeng/selectbutton';
import { AvatarModule } from 'primeng/avatar';
import { AvatarGroupModule } from 'primeng/avatargroup';
import { DialogModule } from 'primeng/dialog';
import { TooltipModule } from 'primeng/tooltip';
import { ToggleSwitchModule } from 'primeng/toggleswitch';

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
    MoodPickerComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,

    ButtonModule,
    ToggleButtonModule,
    SelectButtonModule,
    AvatarModule,
    AvatarGroupModule,
    DialogModule,
    TooltipModule,
    ToggleSwitchModule
  ],
  providers: [
    provideAnimationsAsync(),
    providePrimeNG({
      theme: {
        preset: preset,
        options: {
          prefix: 'p',
          darkModeSelector: 'light',
          cssLayer: false
        }
      }
    })
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
