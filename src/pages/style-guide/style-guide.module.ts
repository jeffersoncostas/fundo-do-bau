import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { StyleGuidePage } from './style-guide';
import { ComponentsModule } from '../../components/components.module'
import { RoundProgressModule } from 'angular-svg-round-progressbar'

@NgModule({
  declarations: [
    StyleGuidePage,
  ],
  imports: [
    ComponentsModule,
    RoundProgressModule,
    IonicPageModule.forChild(StyleGuidePage),
  ],
})
export class StyleGuidePageModule { }
