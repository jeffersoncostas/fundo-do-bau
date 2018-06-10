import { Component, ViewChild } from "@angular/core";
import { IonicPage, NavController, NavParams, Tabs } from "ionic-angular";
import { Usuario } from "../../models/usuario.model";
import { AutenticacaoProvider } from "../../providers/autenticacao/autenticacao";
import { Subscription } from "rxjs/Subscription";

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

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private autenticacao: AutenticacaoProvider
  ) {
    console.log("CONSTRUCTOR TABS");
  }
  ionViewDidLoad() {
    this.tabChange();
  }

  ionViewDidEnter() {
    this.isAdmin();

    if (!this.firstLoaded) {
      console.log("FIRSTL LOADED");
      this.isAdmin();
      this.tabs.select(1).then(() => {
        console.log(this.tabs.getSelected());
        if (!this.firstLoaded && this.tabs.getSelected().length() >= 2) {
          this.tabs
            .getSelected()
            .remove(0, this.tabs.getSelected().length() - 1);
        }
        this.firstLoaded = true;
      });
    }
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
}
