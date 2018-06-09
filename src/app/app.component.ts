import { Component } from "@angular/core";
import { Platform } from "ionic-angular";
import { StatusBar } from "@ionic-native/status-bar";
import { SplashScreen } from "@ionic-native/splash-screen";
import { Storage } from "@ionic/storage";
import { AutenticacaoProvider } from "../providers/autenticacao/autenticacao";
import { AngularFireAuth } from "angularfire2/auth";
import { Subscription } from "rxjs/Subscription";

@Component({
  templateUrl: "app.html"
})
export class MyApp {
  rootPage;
  firebaseSubscription: Subscription;
  constructor(
    platform: Platform,
    statusBar: StatusBar,
    splashScreen: SplashScreen,
    ionicStorage: Storage,
    autenticacao: AutenticacaoProvider,
    firebase: AngularFireAuth
  ) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();

      ionicStorage.get("OnboardPage").then(OnboardPage => {
        if (OnboardPage || OnboardPage != null || OnboardPage != undefined) {
          this.firebaseSubscription = firebase.authState.subscribe(user => {
            if (!user) {
              console.log(user);

              this.rootPage = "LoginPage";
            } else {
              console.log("LOGADO", user);

              this.rootPage = "TabsPage";
            }
          });
        } else {
          this.rootPage = "OnboardPage";
        }
      });
    });
  }
}
