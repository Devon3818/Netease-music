import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the MusicPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-music',
  templateUrl: 'music.html',
})
export class MusicPage {

  mp3url = '2414898';

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    //this.mp3url = this.navParams.get('mp3');
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MusicPage');
  }

}
