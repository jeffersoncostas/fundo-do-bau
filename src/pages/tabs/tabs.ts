import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { Usuario } from "../../models/usuario.model";
import { AutenticacaoProvider } from "../../providers/autenticacao/autenticacao";
import { Subscription } from "rxjs/Subscription";

@IonicPage()
@Component({
  templateUrl: "tabs.html",
  selector: "tabs"
})
export class TabsPage {
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
    this.isAdmin();
  }

  isAdmin() {
    this.userDataObservableSnapshot = this.autenticacao
      .getProfile()
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
}
