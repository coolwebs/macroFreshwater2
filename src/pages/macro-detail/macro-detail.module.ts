import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MacroDetailPage } from './macro-detail';

@NgModule({
  declarations: [
    MacroDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(MacroDetailPage),
  ],
})
export class MacroDetailPageModule {}
