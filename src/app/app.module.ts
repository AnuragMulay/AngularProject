import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { gcComponent } from './ipop/gc/gc.component';
import { inputDComponent } from './ipop/ipop';

@NgModule({
  declarations: [
    AppComponent, inputDComponent, gcComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
