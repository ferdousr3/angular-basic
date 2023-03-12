import { Component } from '@angular/core';

@Component({
  selector: '[app-button]',
  template: `<button class="btn my-btn">click button</button>`,
  styles: ['.my-btn{background-color:green}'],
})
export class ButtonComponent {}
