import { Component } from "@angular/core";
import { Platform } from "ionic-angular";
import { StatusBar } from "@ionic-native/status-bar";
import { SplashScreen } from "@ionic-native/splash-screen";
import { Storage } from "@ionic/storage";
import { AutenticacaoProvider } from "../providers/autenticacao/autenticacao";
import { AngularFireAuth } from "angularfire2/auth";
import { Subscription } from "rxjs/Subscription";
import { Events } from "ionic-angular";

@Component({
  templateUrl: "app.html"
})
export class MyApp {
  rootPage;
  static instance: MyApp = null;
  firebaseSubscription: Subscription;
  constructor(
    platform: Platform,
    statusBar: StatusBar,
    splashScreen: SplashScreen,
    ionicStorage: Storage,
    firebase: AngularFireAuth,
    private events: Events
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

      events.subscribe("logout", () => {
        console.log("APP COMPONENT LOGOUT!");
        this.rootPage = "LoginPage";
      });
      events.subscribe("login", () => {
        console.log("APP COMPONENT LOGIN!");
        this.rootPage = "TabsPage";
      });
      events.subscribe("criar-conta", () => {
        console.log("APP COMPONENT CRIAR CONTA!");
        this.rootPage = "TabsPage";
      });
    });
  }
}
