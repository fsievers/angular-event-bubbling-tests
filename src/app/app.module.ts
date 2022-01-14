import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EventPerRowComponent } from './event-per-row/event-per-row.component';
import { EventOnParentComponent } from './event-on-parent/event-on-parent.component';

@NgModule({
  declarations: [
    AppComponent,
    EventPerRowComponent,
    EventOnParentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
