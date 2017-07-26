import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the SongListComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'song-list',
  templateUrl: 'song-list.html'
})
export class SongListComponent {

  text: string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    console.log('Hello SongListComponent Component');
    this.text = 'Hello World';
  }

  openMusic(){
    this.navCtrl.push( "MusicPage" );
  }

}
