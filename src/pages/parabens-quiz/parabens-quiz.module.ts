import { NgModule } from "@angular/core";
import { IonicPageModule } from "ionic-angular";
import { ParabensQuizPage } from "./parabens-quiz";
import { ComponentsModule } from "../../components/components.module";

@NgModule({
  declarations: [ParabensQuizPage],
  imports: [IonicPageModule.forChild(ParabensQuizPage), ComponentsModule]
})
export class ParabensQuizPageModule {}
