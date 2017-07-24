import { Component } from '@angular/core';

/**
 * Generated class for the RadioCardComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'radio-card',
  templateUrl: 'radio-card.html'
})
export class RadioCardComponent {

  text: string;

  constructor() {
    console.log('Hello RadioCardComponent Component');
    this.text = 'Hello World';
  }

}
