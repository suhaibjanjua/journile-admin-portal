import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { UsersComponent } from './users/users.component';
import { TransactionsComponent } from './transactions/transactions.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ChannelsComponent } from './channels/channels.component';
import { GammaTagsComponent } from './gamma-tags/gamma-tags.component';
import { SettingsComponent } from './settings/settings.component';

import { UserService } from './services/user.service';
import { TransactionService } from './services/transaction.service';
import { SettingService } from './services/setting.service';
import { ChannelService } from './services/channel.service';
import { GammaTagService } from './services/gamma-tag.service';

const routes: Routes = [
    {
      path: '',
      component: LoginComponent
    },
    {
      path: 'users',
      component: UsersComponent
    },
    {
      path: 'transactions',
      component: TransactionsComponent
    },
    {
      path: 'channels',
      component: ChannelsComponent
    },
    {
      path: 'gammatags',
      component: GammaTagsComponent
    },
    {
      path: 'settings',
      component: SettingsComponent
    },
    {
      path: '**',
      component: NotFoundComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    providers: [
      UserService,
      TransactionService,
      ChannelService,
      GammaTagService,
      SettingService
    ]
})
export class AppRoutingModule {
}
