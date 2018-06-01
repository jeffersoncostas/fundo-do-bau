import { NgModule } from "@angular/core";
import { IonicPageModule } from "ionic-angular";
import { VideoPage } from "./video";
import { ComponentsModule } from "../../components/components.module";

@NgModule({
  declarations: [VideoPage],
  imports: [IonicPageModule.forChild(VideoPage), ComponentsModule]
})
export class VideoPageModule {}
