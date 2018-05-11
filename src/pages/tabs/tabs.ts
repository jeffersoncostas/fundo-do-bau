import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Usuario } from '../../models/usuario.model';
import { AutenticacaoProvider } from '../../providers/autenticacao/autenticacao';
import { Subscription } from 'rxjs/Subscription';

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
  adminBool: boolean = false;
  params = this.navParams.data;

  userData$: Usuario;
  userDataObservableSnapshot: Subscription;

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
          if (this.userData$.adm) {
            this.admin = "AdminPage";
            this.adminBool = true;
          }
          else {
            this.adminBool = false;
            this.admin = null;
          }
          console.log('adminbool', this.adminBool)
          // this.userDataObservableSnapshot.unsubscribe();
        })
    })

  }

  click(): void {

  }
}
