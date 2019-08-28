import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EventComponent } from './event/event.component';
import { AlmaComponent } from './alma/alma.component';
import { newComponent } from './new/new.component';

@NgModule({
  declarations: [
    AppComponent,
    EventComponent,
    AlmaComponent,
    newComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
