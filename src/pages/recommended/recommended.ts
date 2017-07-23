import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the RecommendedPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-recommended',
  templateUrl: 'recommended.html',
})
export class RecommendedPage {

  swiperlist = [
    "http://p1.music.126.net/dgtzGyA4-jOxBi4VzR-Puw==/19176582300295372.jpg",
    "http://p1.music.126.net/xZ2eaUPI-kASZAmRDVhnBg==/19130402811918090.jpg",
    "http://p1.music.126.net/BBb-5V7cmeztaU8f9ruQRw==/19158990114249410.jpg",
    "http://p1.music.126.net/EOT2La1-GLsT1UEo4xSDJQ==/18897306346838331.jpg",
    "http://p1.music.126.net/DCQvBGXkY2Xbi-VZUqZQXQ==/18909400974745167.jpg",
    "http://p1.music.126.net/qT7G7rc5b_up3fB8GUOPjQ==/19232657393311450.jpg",
    "http://p1.music.126.net/kPHIrelpVxnvAbb8WeSyGQ==/18644418674212616.jpg",
    "http://p1.music.126.net/hIwCAw2dz0PiFiujNkM6RA==/19142497439833776.jpg"
  ]

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RecommendedPage');
  }

}
