import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-databind',
  templateUrl: './databind.component.html',
  styleUrls: ['./databind.component.scss'],
})
export class DatabindComponent {
  myName = 'Devskill';
  myImage = '../../../assets/images/angular-logo.png';
  searchValue: string = '';
  changeSearchValue(eventData: Event) {
    this.searchValue = (<HTMLInputElement>eventData.target).value;
  }

  
}
