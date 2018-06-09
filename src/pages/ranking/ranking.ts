import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { DatabaseProvider } from "../../providers/database/database";
import { LoadingsProvider } from "../../providers/loadings/loadings";

@IonicPage()
@Component({
  selector: "page-ranking",
  templateUrl: "ranking.html"
})
export class RankingPage {
  listaUsersRanking: { userName: string; nome: string; pontos: number }[];
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private database: DatabaseProvider,
    private loading: LoadingsProvider
  ) {}
  ionViewWillLoad() {
    //this.ranking();
  }
  ionViewWillEnter() {
    this.ranking();
    this.loading.loadingPadrao("carregando...");
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad RankingPage");
  }

  async ranking() {
    console.log(this.listaUsersRanking);
    this.database.getRanking().then(data => {
      this.listaUsersRanking = data;
      console.log(data);
      this.loading.loadingPadraoDismiss();
    });
  }

  refresh(refresher) {
    console.log(refresher);
    this.listaUsersRanking = [];
    this.loading.loadingPadrao("carregando...");

    setTimeout(() => {
      this.ranking().then(e => {
        refresher.complete();
      });
    }, 800);
  }
}
