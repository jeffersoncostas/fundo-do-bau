import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular'
import { FdbaButtonComponent } from './atoms/fdba-button/fdba-button';
import { FdbaCardComponent } from './moleculas/fdba-card/fdba-card';

@NgModule({
	declarations: [FdbaButtonComponent,
		FdbaCardComponent],
	imports: [IonicModule],
	exports: [FdbaButtonComponent,
		FdbaCardComponent]
})
export class ComponentsModule { }
