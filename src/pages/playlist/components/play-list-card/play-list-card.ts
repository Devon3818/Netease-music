import { Component, Input } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
/**
 * Generated class for the PlayListCardComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'play-list-card',
  templateUrl: 'play-list-card.html'
})
export class PlayListCardComponent {

  @Input() data:any = [];
  rootNavCtrl: NavController;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.rootNavCtrl = navParams.get('rootNavCtrl');
  }

  OpenPlaylistPage(){
    
    this.rootNavCtrl.push( 'OpenPlaylistPage' );
  }

}
