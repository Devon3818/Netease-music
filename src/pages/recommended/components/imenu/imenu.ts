import { Component } from '@angular/core';

/**
 * Generated class for the MenuComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'imenu',
  templateUrl: 'imenu.html'
})
export class MenuComponent {

  text: string;

  constructor() {
    console.log('Hello MenuComponent Component');
    this.text = 'Hello World';
  }

}
