import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  segments = "home";
  recommended = "RecommendedPage";
  playlist = "PlaylistPage";
  radio = "RadioPage";
  ranking = "RankingPage";

  constructor(public navCtrl: NavController) {

  }

}
