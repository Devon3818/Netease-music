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
  page2 = "RecommendedPage";
  page3 = "RecommendedPage";
  page4 = "RecommendedPage";

  constructor(public navCtrl: NavController) {

  }

}
