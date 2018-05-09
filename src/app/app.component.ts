import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Storage } from '@ionic/storage'



@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage: any
  constructor(platform: Platform,
    statusBar: StatusBar,
    splashScreen: SplashScreen,
    ionicStorage: Storage) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();

      ionicStorage.get('OnboardPage').then((OnboardPage) => {
        if (OnboardPage || OnboardPage != null || OnboardPage != undefined) {
          this.rootPage = 'LoginPage'
        }
        else {
          this.rootPage = 'OnboardPage';
        }
      })

    });
  }
}
