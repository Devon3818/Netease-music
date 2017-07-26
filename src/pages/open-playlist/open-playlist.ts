import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SongsProvider } from '../../providers/songs/songs';
/**
 * Generated class for the OpenPlaylistPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-open-playlist',
  templateUrl: 'open-playlist.html',
})
export class OpenPlaylistPage {

  data:any;

  constructor(public songs: SongsProvider, public navCtrl: NavController, public navParams: NavParams) {
    this.data = this.songs.music;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OpenPlaylistPage');
  }

  openMusic(){
    this.navCtrl.push( "MusicPage" );
  }

}
