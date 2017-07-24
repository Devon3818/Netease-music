import { Component } from '@angular/core';

/**
 * Generated class for the MusicComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'music',
  templateUrl: 'music.html'
})
export class MusicComponent {

  text: string;

  constructor() {
    console.log('Hello MusicComponent Component');
    this.text = 'Hello World';
  }

}
