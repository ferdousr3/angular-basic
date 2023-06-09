import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ModalComponent } from './modal/modal.component';
import { PagesComponent } from './pages.component';
import { UserComponent } from './user/user.component';
import { AllUsersComponent } from './all-users/all-users.component';

const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      {
        path: '',
        redirectTo: 'profile',
        pathMatch: 'full',
      },
      {
        path: 'profile',
        loadChildren: () =>
          import('./profile/profile.module').then((m) => m.ProfileModule),
      },
      {
        path: 'all-user',
        title:'all-user',
        component: AllUsersComponent,
      },
      {
        path: 'user',
        component: UserComponent,
      },
      {
        path: 'modal',
        component: ModalComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
