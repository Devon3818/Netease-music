import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RadioPage } from './radio';
import { MusicCardComponentModule } from './components/music-card/music-card.module';

@NgModule({
  declarations: [
    RadioPage,
  ],
  imports: [
    IonicPageModule.forChild(RadioPage),
    MusicCardComponentModule
  ],
  exports: [
    RadioPage
  ]
})
export class RadioPageModule {}