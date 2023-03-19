import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NotFoundComponent } from './not-found/not-found.component';
import { PagesRoutingModule } from './pages-routing.module';
import { ProfileComponent } from './profile/profile.component';
import { UserComponent } from './user/user.component';
import { ModalComponent } from './modal/modal.component';
import { ButtonComponent } from '../shared/components/button/button.component';
import { NewButtonComponent } from '../shared/components/ne-button/neButton.component';
import { DatabindComponent } from './databind/databind.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    NotFoundComponent,
    ProfileComponent,
    UserComponent,
    ModalComponent,
    ButtonComponent,
    NewButtonComponent,
    DatabindComponent,
  ],
  imports: [CommonModule, PagesRoutingModule, FormsModule],
})
export class PagesModule {}
