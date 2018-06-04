import { NgModule } from "@angular/core";
import { IonicPageModule } from "ionic-angular";
import { ParabensVideoPage } from "./parabens-video";
import { ComponentsModule } from "../../components/components.module";

@NgModule({
  declarations: [ParabensVideoPage],
  imports: [IonicPageModule.forChild(ParabensVideoPage), ComponentsModule]
})
export class ParabensVideoPageModule {}
