
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { LoginComponent } from './login/login.component';
import { TransactionsComponent } from './transactions/transactions.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FormsModule } from '@angular/forms';
import { HttpModule, Http } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { PanelComponent } from './panel/panel.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SettingsComponent } from './settings/settings.component';
import { ChannelsComponent } from './channels/channels.component';
import { FooterComponent } from './footer/footer.component';
import { PagecontainerComponent } from './pagecontainer/pagecontainer.component';
import { GammaTagsComponent } from './gamma-tags/gamma-tags.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UsersComponent,
    TransactionsComponent,
    NotFoundComponent,
    NavbarComponent,
    HomeComponent,
    PanelComponent,
    SidebarComponent,
    SettingsComponent,
    ChannelsComponent,
    FooterComponent,
    PagecontainerComponent,
    GammaTagsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
