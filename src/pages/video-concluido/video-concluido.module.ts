import { NgModule } from "@angular/core";
import { IonicPageModule } from "ionic-angular";
import { VideoConcluidoPage } from "./video-concluido";
import { ComponentsModule } from "../../components/components.module";

@NgModule({
  declarations: [VideoConcluidoPage],
  imports: [IonicPageModule.forChild(VideoConcluidoPage), ComponentsModule]
})
export class VideoConcluidoPageModule {}
