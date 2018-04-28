import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { StyleGuidePage } from './style-guide';
import { ComponentsModule } from '../../components/components.module'

@NgModule({
  declarations: [
    StyleGuidePage,
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(StyleGuidePage),
  ],
})
export class StyleGuidePageModule { }
