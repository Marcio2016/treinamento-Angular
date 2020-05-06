import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { InterpolacaoComponent } from './interpolacao/interpolacao.component';
import { EventbindingComponent } from './eventbinding/eventbinding.component';

@NgModule({
  declarations: [
    AppComponent,
    InterpolacaoComponent,
    EventbindingComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
