import { NgModule, ErrorHandler } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { CommonModule } from "@angular/common";
import { IonicApp, IonicModule, IonicErrorHandler } from "ionic-angular";
import { FormsModule } from "@angular/forms";

import { MyApp } from "./app.component";

import { StatusBar } from "@ionic-native/status-bar";
import { SplashScreen } from "@ionic-native/splash-screen";
import { NativeStorage } from "@ionic-native/native-storage";
import { IonicStorageModule } from "@ionic/storage";
import { Geolocation } from "@ionic-native/geolocation";
import { NativePageTransitions } from "@ionic-native/native-page-transitions";

import { AngularFireModule } from "angularfire2";
import { AngularFireDatabaseModule } from "angularfire2/database";
import { AngularFireAuthModule } from "angularfire2/auth";
import { FIREBASE_CONFIG } from "./firebase.credentials";

import { AutenticacaoProvider } from "../providers/autenticacao/autenticacao";
import { LoadingsProvider } from "../providers/loadings/loadings";
import { TratamentoErrosProvider } from "../providers/tratamento-erros/tratamento-erros";
import { DatabaseProvider } from "../providers/database/database";
import { AlertsProvider } from "../providers/alerts/alerts";
import { LocationProvider } from "../providers/location/location";
import { RecompensasProvider } from "../providers/recompensas/recompensas";
import { CountTabProvider } from "../providers/count-tab/count-tab";
@NgModule({
  declarations: [MyApp],
  imports: [
    BrowserModule,
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    IonicModule.forRoot(MyApp, { pageTransition: "ios-transition" }),
    IonicStorageModule.forRoot(),
    AngularFireModule.initializeApp(FIREBASE_CONFIG),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [MyApp],
  providers: [
    StatusBar,
    SplashScreen,
    NativeStorage,
    Geolocation,
    NativePageTransitions,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    AutenticacaoProvider,
    LoadingsProvider,
    TratamentoErrosProvider,
    DatabaseProvider,
    AlertsProvider,
    LocationProvider,
    RecompensasProvider,
    CountTabProvider
  ]
})
export class AppModule {}
