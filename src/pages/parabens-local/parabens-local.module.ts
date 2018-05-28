import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ParabensLocalPage } from './parabens-local';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    ParabensLocalPage,
  ],
  imports: [
    IonicPageModule.forChild(ParabensLocalPage), ComponentsModule
  ],
})
export class ParabensLocalPageModule {}
