import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NotFoundComponent } from './not-found/not-found.component';
import { PagesRoutingModule } from './pages-routing.module';
import { ProfileComponent } from './profile/profile.component';
import { UserComponent } from './user/user.component';
import { ModalComponent } from './modal/modal.component';
import { ButtonComponent } from '../shared/components/button/button.component';
import { NewButtonComponent } from '../shared/components/ne-button/neButton.component';


@NgModule({
  declarations: [NotFoundComponent, ProfileComponent, UserComponent, ModalComponent, ButtonComponent,NewButtonComponent],
  imports: [CommonModule, PagesRoutingModule],
})
export class PagesModule {}
