import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular'
import { FdbaButtonComponent } from './atoms/fdba-button/fdba-button';
import { FdbaCardComponent } from './moleculas/fdba-card/fdba-card';
import { FdbaCircularProgress2Component } from './fdba-circular-progress2/fdba-circular-progress2';
import { RoundProgressModule } from 'angular-svg-round-progressbar'
import { FdbaSliderComponent } from './moleculas/fdba-slider/fdba-slider';

@NgModule({
	declarations: [FdbaButtonComponent,
		FdbaCardComponent,
		FdbaCircularProgress2Component,
		FdbaSliderComponent],
	imports: [IonicModule, RoundProgressModule],
	exports: [FdbaButtonComponent,
		FdbaCardComponent,
		FdbaCircularProgress2Component,
		FdbaSliderComponent]
})
export class ComponentsModule { }
