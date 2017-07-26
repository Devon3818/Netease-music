import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
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

  text: string;
  rootNavCtrl: NavController;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.rootNavCtrl = navParams.get('rootNavCtrl');
    this.text = 'Hello World';
  }

  OpenPlaylistPage(){
    
    this.rootNavCtrl.push( 'OpenPlaylistPage' );
  }

}
