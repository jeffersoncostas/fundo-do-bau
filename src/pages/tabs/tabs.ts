import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Usuario } from '../../models/usuario.model';
import { AutenticacaoProvider } from '../../providers/autenticacao/autenticacao';

@IonicPage()

@Component({
  templateUrl: 'tabs.html',
  selector: 'tabs'
})
export class TabsPage {

  ranking = 'RankingPage';
  home = 'HomePage';
  perfil = 'PerfilPage';
  styleguide = 'StyleGuidePage';
  admin: string;

  params = this.navParams.data;

  userData$: Usuario;
  userDataObservableSnapshot: any;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private autenticacao: AutenticacaoProvider) {


    this.autenticacao.estaLogado().then((id) => {

      this.userDataObservableSnapshot = this.autenticacao
        .getProfile(id)
        .snapshotChanges()
        .subscribe(profile => {
          this.userData$ = profile.payload.val();
          console.log(this.userData$)
          this.userData$.adm ? this.admin = "AdminPage" : this.admin = null;
        })
    })

  }

  click(): void {

  }
}
