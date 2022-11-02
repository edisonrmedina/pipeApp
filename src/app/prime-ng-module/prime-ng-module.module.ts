import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


//prime ng
import {ButtonModule} from 'primeng/button';
import {CardModule} from 'primeng/card';
import {MenubarModule} from 'primeng/menubar';
import {FieldsetModule} from 'primeng/fieldset';

@NgModule({
  declarations: [],
  imports: [
    ButtonModule,
    CardModule,
    FieldsetModule
  ],
  exports :[
    ButtonModule,
    CardModule,
    MenubarModule,
    FieldsetModule
  ]
})
export class PrimeNgModuleModule { }
