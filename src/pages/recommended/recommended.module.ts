import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RecommendedPage } from './recommended';
import { SwiperComponentModule } from './components/swiper/swiper.module';
import { MenuComponentModule } from './components/imenu/imenu.module';

@NgModule({
  declarations: [
    RecommendedPage,
  ],
  imports: [
    IonicPageModule.forChild(RecommendedPage),
    SwiperComponentModule,
    MenuComponentModule
  ],
  exports: [
    RecommendedPage
  ]
})
export class RecommendedPageModule {}