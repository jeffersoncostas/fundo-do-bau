import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CriarContaPage } from './criar-conta';

import { ComponentsModule } from '../../components/components.module'

@NgModule({
  declarations: [
    CriarContaPage,
  ],
  imports: [
    IonicPageModule.forChild(CriarContaPage), ComponentsModule
  ],
})
export class CriarContaPageModule { }
