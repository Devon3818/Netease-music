import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RecommendedPage } from './recommended';
import { SwiperComponentModule } from './components/swiper/swiper.module';
import { MenuComponentModule } from './components/imenu/imenu.module';
import { MusicCardComponentModule } from './components/music-card/music-card.module';

@NgModule({
  declarations: [
    RecommendedPage,
  ],
  imports: [
    IonicPageModule.forChild(RecommendedPage),
    SwiperComponentModule,
    MenuComponentModule,
    MusicCardComponentModule
  ],
  exports: [
    RecommendedPage
  ]
})
export class RecommendedPageModule {}