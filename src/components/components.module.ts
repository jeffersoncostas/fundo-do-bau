import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular'
import { FdbaButtonComponent } from './atoms/fdba-button/fdba-button';

@NgModule({
	declarations: [FdbaButtonComponent],
	imports: [IonicModule],
	exports: [FdbaButtonComponent]
})
export class ComponentsModule { }
