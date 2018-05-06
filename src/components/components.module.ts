import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular'
import { FdbaButtonComponent } from './atoms/fdba-button/fdba-button';
import { FdbaCardComponent } from './moleculas/fdba-card/fdba-card';
import { FdbaCircularProgress2Component } from './atoms/fdba-circular-progress2/fdba-circular-progress2';
import { RoundProgressModule } from 'angular-svg-round-progressbar'
import { FdbaSliderComponent } from './moleculas/fdba-slider/fdba-slider';
import { FdbaDicasComponent } from './atoms/fdba-dicas/fdba-dicas';
import { FdbaTextoExtraParabensComponent } from './atoms/fdba-texto-extra-parabens/fdba-texto-extra-parabens';
import { FdbaTextoParabensBotaoComponent } from './moleculas/fdba-texto-parabens-botao/fdba-texto-parabens-botao';

@NgModule({
	declarations: [FdbaButtonComponent,
		FdbaCardComponent,
		FdbaCircularProgress2Component,
		FdbaSliderComponent,
		FdbaDicasComponent,
		FdbaTextoExtraParabensComponent,
		FdbaTextoParabensBotaoComponent],
	imports: [IonicModule, RoundProgressModule],
	exports: [FdbaButtonComponent,
		FdbaCardComponent,
		FdbaCircularProgress2Component,
		FdbaSliderComponent,
		FdbaDicasComponent,
		FdbaTextoExtraParabensComponent,
		FdbaTextoParabensBotaoComponent]
})
export class ComponentsModule { }
