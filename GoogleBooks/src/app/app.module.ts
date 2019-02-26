import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GoogleBookItemComponent } from './google-book-item/google-book-item.component';

@NgModule({
  declarations: [
    AppComponent,
    GoogleBookItemComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
