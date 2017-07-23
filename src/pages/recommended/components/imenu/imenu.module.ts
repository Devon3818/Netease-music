import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { MenuComponent } from './imenu';

@NgModule({
  declarations: [
    MenuComponent,
  ],
  imports: [
    IonicModule,
  ],
  exports: [
    MenuComponent
  ]
})
export class MenuComponentModule {}