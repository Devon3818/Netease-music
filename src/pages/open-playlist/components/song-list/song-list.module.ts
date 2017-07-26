import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { SongListComponent } from './song-list';

@NgModule({
  declarations: [
    SongListComponent,
  ],
  imports: [
    IonicModule,
  ],
  exports: [
    SongListComponent
  ]
})
export class SongListComponentModule {}