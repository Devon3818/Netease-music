import { Component, Input } from '@angular/core';
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

  @Input() data:any = [];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    
  }

  openMusic( mp3 ){
    
    this.navCtrl.push( "MusicPage",{
      mp3:mp3
    } );
  }

}
