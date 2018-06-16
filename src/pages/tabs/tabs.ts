import { Component, ViewChild } from "@angular/core";
import {
  IonicPage,
  NavController,
  NavParams,
  Tabs,
  Events
} from "ionic-angular";
import { Usuario } from "../../models/usuario.model";
import { AutenticacaoProvider } from "../../providers/autenticacao/autenticacao";
import { Subscription } from "rxjs/Subscription";
import { CountTabProvider } from "../../providers/count-tab/count-tab";
import { log } from "@firebase/database/dist/src/core/util/util";

import {
  NativePageTransitions,
  NativeTransitionOptions
} from "@ionic-native/native-page-transitions";

@IonicPage()
@Component({
  templateUrl: "tabs.html",
  selector: "tabs"
})
export class TabsPage {
  @ViewChild("tabs") tabs: Tabs;
  private firstLoaded: boolean = false;

  ranking = "RankingPage";
  home = "HomePage";
  perfil = "PerfilPage";
  styleguide = "StyleGuidePage";

  admin: string;
  adminBool: boolean = false;

  userData$: Usuario;
  userDataObservableSnapshot: Subscription;
  tabParams: any;
  selectedIndex: number;

  loaded: boolean = false;

  tab2: boolean;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private autenticacao: AutenticacaoProvider,
    private countTab: CountTabProvider,
    private events: Events,
    private nativePageTransitions: NativePageTransitions
  ) {
    this.selectedIndex = 1;
    this.tab2 = false;
    console.log("CONSTRUCTOR TABS");

    this.countTab.tabCounter++;

    this.events.subscribe("parabens:quiz", param => {
      this.tabParams = param;
      this.selectedIndex = 2;
    });
  }
  ionViewDidLoad() {
    this.tabChange();
  }

  ionViewDidEnter() {
    this.isAdmin();
  }

  isAdmin() {
    this.userDataObservableSnapshot = this.autenticacao
      .getProfile()
      .take(1)
      .subscribe(profile => {
        console.log(profile);
        this.userData$ = profile;
        this.tabParams = this.userData$;
        if (this.userData$.adm) {
          this.admin = "AdminPage";
          this.adminBool = true;
        } else {
          this.adminBool = false;
          this.admin = null;
        }
        this.userDataObservableSnapshot.unsubscribe();
      });
  }

  tabChange() {
    console.log("Mudei de pagina tabssss");
    if (this.navParams.data.tabIndex) {
      console.log(this.navParams.data);
      let sel = this.navParams.data.tabIndex;
      if (this.navParams.data.configSegment) {
        let configSegmentObj = {
          configSegment: this.navParams.data.configSegment
        };
        this.tabParams = configSegmentObj;
        this.firstLoaded = true;
        console.log(configSegmentObj);
        this.tabs.select(sel);
        return;
      }

      this.tabs.select(sel);
      this.firstLoaded = true;
    }
  }

  public getAnimationDirection(index): string {
    var currentIndex = this.selectedIndex;

    console.log("SELECTED INDEX", this.selectedIndex);
    this.selectedIndex = index;

    switch (true) {
      case currentIndex < index:
        return "left";
      case currentIndex > index:
        return "right";
    }
  }

  public transition(e): void {
    console.log(e.index);
    let options: NativeTransitionOptions = {
      direction: this.getAnimationDirection(e.index),
      duration: 250,
      slowdownfactor: -1,
      slidePixels: 0,
      iosdelay: 20,
      androiddelay: 0,
      fixedPixelsTop: 0,
      fixedPixelsBottom: 48
    };

    if (!this.loaded) {
      this.loaded = true;
      return;
    }

    this.nativePageTransitions.slide(options);
  }
}
