import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { DatabaseProvider } from "../../providers/database/database";

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
    private database: DatabaseProvider
  ) {}
  ionViewWillLoad() {
    this.ranking();
  }
  ionViewWillEnter() {
    this.ranking();
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad RankingPage");
  }

  ranking() {
    this.database.getRanking().then(data => {
      this.listaUsersRanking = data.reverse();
      console.log(data);
    });
  }
}
