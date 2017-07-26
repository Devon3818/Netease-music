import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OpenPlaylistPage } from './open-playlist';
import { SongListComponentModule } from './components/song-list/song-list.module'

@NgModule({
  declarations: [
    OpenPlaylistPage,
  ],
  imports: [
    IonicPageModule.forChild(OpenPlaylistPage),
    SongListComponentModule
  ],
  exports: [
    OpenPlaylistPage
  ]
})
export class OpenPlaylistPageModule {}