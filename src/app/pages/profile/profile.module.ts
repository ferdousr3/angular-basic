import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { AccountComponent } from './account/account.component';
import { BillingComponent } from './billing/billing.component';
import { PasswordComponent } from './password/password.component';


@NgModule({
  declarations: [
    AccountComponent,
    BillingComponent,
    PasswordComponent
  ],
  imports: [
    CommonModule,
    ProfileRoutingModule
  ]
})
export class ProfileModule { }
