import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { StyleGuidePage } from './style-guide';

@NgModule({
  declarations: [
    StyleGuidePage,
  ],
  imports: [
    IonicPageModule.forChild(StyleGuidePage),
  ],
})
export class StyleGuidePageModule {}
