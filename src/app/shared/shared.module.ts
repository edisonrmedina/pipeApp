import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { PrimeNgModuleModule } from '../prime-ng-module/prime-ng-module.module';



@NgModule({
  declarations: [MenuComponent],
  imports: [
    CommonModule,
    PrimeNgModuleModule
  ],
  exports:[MenuComponent]
})
export class SharedModule { }
