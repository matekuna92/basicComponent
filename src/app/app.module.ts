import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EventComponent } from './event/event.component';
import { AlmaComponent } from './alma/alma.component';
import { newComponent } from './new/new.component';

// oda-vissza bind ngModel-en keresztül működik, ehhez szükséges külön beimportálni a formsModule-t, 
// hogy működjön * !
import { FormsModule } from '@angular/forms';
import { ListdemoComponent } from './listdemo/listdemo.component';

@NgModule({
  declarations: [
    AppComponent,
    EventComponent,
    AlmaComponent,
    newComponent,
    ListdemoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule // *
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
