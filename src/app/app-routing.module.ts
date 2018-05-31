import { AuthenticationService } from './authentication.service';
import { UserService } from './user.service';
import { TransactionService } from './transaction.service';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { UsersComponent } from './users/users.component';
import { TransactionsComponent } from './transactions/transactions.component';
import { NotFoundComponent } from './not-found/not-found.component';

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
      path: '**',
      component: NotFoundComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    providers: [
      AuthenticationService,
      UserService,
      TransactionService
    ]
})
export class AppRoutingModule {
}
