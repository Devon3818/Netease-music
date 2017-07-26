import { Component, Input } from '@angular/core';

/**
 * Generated class for the MusicCardComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'music-card',
  templateUrl: 'music-card.html'
})
export class MusicCardComponent {

  @Input() data:any = [];

  constructor() {
    
  }

}
