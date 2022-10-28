import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppComponent } from './app.component';

//personalizados
import { PrimeNgModuleModule } from './prime-ng-module/prime-ng-module.module';
import { SharedModule } from './shared/shared.module';


//PrimeNg
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    PrimeNgModuleModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
