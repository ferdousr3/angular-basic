import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountComponent } from './account/account.component';
import { BillingComponent } from './billing/billing.component';
import { ProfileComponent } from './profile.component';
import { DatabindComponent } from '../databind/databind.component';

const routes: Routes = [
  {
    path: '',
    component: ProfileComponent,
    children: [
      {
        path: '',
        redirectTo: 'account',
        pathMatch: 'full',
      },
      {
        path: 'account',
        component: AccountComponent,
      },
      {
        path: 'billing',
        component: BillingComponent,
      },
      {
        path: 'data-bind',
        component: DatabindComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfileRoutingModule {}
