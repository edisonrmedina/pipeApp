import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NumerosComponent } from './pages/numeros/numeros.component';
import { NoComunesComponent } from './pages/no-comunes/no-comunes.component';
import { BasicosComponent } from './pages/basicos/basicos.component';
import { OrdenarComponent } from './pages/ordenar/ordenar.component';
import { CardModule } from 'primeng/card';
import { PrimeNgModuleModule } from '../prime-ng-module/prime-ng-module.module';



@NgModule({
  declarations: [
    NumerosComponent,
    NoComunesComponent,
    BasicosComponent,
    OrdenarComponent
  ],
  imports: [
    CommonModule,
    PrimeNgModuleModule
  ],
  exports:[
    NumerosComponent,
    NoComunesComponent,
    BasicosComponent,
    OrdenarComponent
  ]
})
export class VentasModule { }
