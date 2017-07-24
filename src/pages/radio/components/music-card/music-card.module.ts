import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { MusicCardComponent } from './music-card';

@NgModule({
  declarations: [
    MusicCardComponent,
  ],
  imports: [
    IonicModule,
  ],
  exports: [
    MusicCardComponent
  ]
})
export class MusicCardComponentModule {}