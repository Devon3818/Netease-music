import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { PlayListCardComponent } from './play-list-card';

@NgModule({
  declarations: [
    PlayListCardComponent,
  ],
  imports: [
    IonicModule,
  ],
  exports: [
    PlayListCardComponent
  ]
})
export class PlayListCardComponentModule {}