import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OnboardPage } from './onboard';
import { ComponentsModule } from '../../components/components.module';
@NgModule({
  declarations: [
    OnboardPage,
  ],
  imports: [
    IonicPageModule.forChild(OnboardPage),
    ComponentsModule,
  ],
})
export class OnboardPageModule { }
