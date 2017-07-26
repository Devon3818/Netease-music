import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SongsProvider } from '../../providers/songs/songs';
/**
 * Generated class for the RadioPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-radio',
  templateUrl: 'radio.html',
})
export class RadioPage {

  data:any = {};

  constructor(public songs: SongsProvider, public navCtrl: NavController, public navParams: NavParams) {
    this.data = this.songs.radio;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RadioPage');
  }

}
