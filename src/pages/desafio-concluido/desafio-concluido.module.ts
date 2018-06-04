import { NgModule } from "@angular/core";
import { IonicPageModule } from "ionic-angular";
import { DesafioConcluidoPage } from "./desafio-concluido";
import { ComponentsModule } from "../../components/components.module";

@NgModule({
  declarations: [DesafioConcluidoPage],
  imports: [IonicPageModule.forChild(DesafioConcluidoPage), ComponentsModule]
})
export class DesafioConcluidoPageModule {}
