import { NgModule } from "@angular/core";
import { IonicModule } from "ionic-angular";
import { FormsModule } from "@angular/forms";

import { FdbaButtonComponent } from "./atoms/fdba-button/fdba-button";
import { FdbaCardComponent } from "./moleculas/fdba-card/fdba-card";
import { FdbaCircularProgress2Component } from "./atoms/fdba-circular-progress2/fdba-circular-progress2";
import { RoundProgressModule } from "angular-svg-round-progressbar";
import { FdbaSliderComponent } from "./moleculas/fdba-slider/fdba-slider";
import { FdbaDicasComponent } from "./moleculas/fdba-dicas/fdba-dicas";
import { FdbaTextoExtraParabensComponent } from "./atoms/fdba-texto-extra-parabens/fdba-texto-extra-parabens";
import { FdbaTextoParabensBotaoComponent } from "./moleculas/fdba-texto-parabens-botao/fdba-texto-parabens-botao";
import { FdbaConquistaComponent } from "./atoms/fdba-conquista/fdba-conquista";
import { FdbaBadgeComponent } from "./atoms/fdba-badge/fdba-badge";
import { FdbaDesafioHeaderComponent } from "./moleculas/fdba-desafio-header/fdba-desafio-header";
import { FdbaInputComponent } from "./moleculas/fdba-input/fdba-input";
import { FdbaQuizComponent } from "./moleculas/fdba-quiz/fdba-quiz";
import { FdbaCardRankingComponent } from "./atoms/fdba-card-ranking/fdba-card-ranking";
import { FdbaHeaderConfigComponent } from "./moleculas/fdba-header-config/fdba-header-config";
import { FdbaDesafioInfoComponent } from "./moleculas/fdba-desafio-info/fdba-desafio-info";
import { FdbaRankingHeaderComponent } from "./moleculas/fdba-ranking-header/fdba-ranking-header";
import { FdbaPerfilInputComponent } from "./moleculas/fdba-perfil-input/fdba-perfil-input";
import { FdbaToogleComponent } from "./moleculas/fdba-toogle/fdba-toogle";
import { FdbaHomeHeaderComponent } from "./moleculas/fdba-home-header/fdba-home-header";
import { FdbaParabensComponent } from "./atoms/fdba-parabens/fdba-parabens";
import { FdbaListaCardRankingComponent } from "./moleculas/fdba-lista-card-ranking/fdba-lista-card-ranking";
import { FdbaTextoAvisoComponent } from "./atoms/fdba-texto-aviso/fdba-texto-aviso";

@NgModule({
  declarations: [
    FdbaButtonComponent,
    FdbaCardComponent,
    FdbaCircularProgress2Component,
    FdbaSliderComponent,
    FdbaDicasComponent,
    FdbaTextoExtraParabensComponent,
    FdbaTextoParabensBotaoComponent,
    FdbaConquistaComponent,
    FdbaBadgeComponent,
    FdbaDesafioHeaderComponent,

    FdbaParabensComponent,
    FdbaInputComponent,
    FdbaQuizComponent,
    FdbaCardRankingComponent,
    FdbaDesafioInfoComponent,
    FdbaHeaderConfigComponent,
    FdbaRankingHeaderComponent,
    FdbaPerfilInputComponent,
    FdbaHomeHeaderComponent,
    FdbaToogleComponent,
    FdbaListaCardRankingComponent,
    FdbaTextoAvisoComponent
  ],
  imports: [IonicModule, RoundProgressModule, FormsModule],
  exports: [
    FdbaButtonComponent,
    FdbaCardComponent,
    FdbaCircularProgress2Component,
    FdbaSliderComponent,
    FdbaDicasComponent,
    FdbaTextoExtraParabensComponent,
    FdbaTextoParabensBotaoComponent,
    FdbaConquistaComponent,
    FdbaBadgeComponent,
    FdbaDesafioHeaderComponent,
    FdbaParabensComponent,
    FdbaInputComponent,
    FdbaQuizComponent,
    FdbaDesafioInfoComponent,
    FdbaCardRankingComponent,
    FdbaHeaderConfigComponent,
    FdbaRankingHeaderComponent,
    FdbaPerfilInputComponent,
    FdbaHomeHeaderComponent,
    FdbaToogleComponent,
    FdbaParabensComponent,
    FdbaListaCardRankingComponent,
    FdbaTextoAvisoComponent
  ]
})
export class ComponentsModule {}
