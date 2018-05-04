import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { StyleGuidePageModule } from '../pages/style-guide/style-guide.module';
import { ComponentsModule } from '../components/components.module';

import { MyApp } from './app.component';
import { TabsPage } from '../pages/tabs/tabs';
import { StyleGuidePage } from '../pages/style-guide/style-guide';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { TesteDesafioDistanciaPageModule } from '../pages/teste-desafio-distancia/teste-desafio-distancia.module';
import { TesteDesafioDistanciaPage } from '../pages/teste-desafio-distancia/teste-desafio-distancia';

@NgModule({
  declarations: [
    MyApp,
    TabsPage,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    ComponentsModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule { }
