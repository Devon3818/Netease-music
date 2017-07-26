import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PlaylistPage } from './playlist';
import { PlayListCardComponentModule } from './components/play-list-card/play-list-card.module';

@NgModule({
  declarations: [
    PlaylistPage,
  ],
  imports: [
    IonicPageModule.forChild(PlaylistPage),
    PlayListCardComponentModule
  ],
  exports: [
    PlaylistPage
  ]
})
export class PlaylistPageModule {}