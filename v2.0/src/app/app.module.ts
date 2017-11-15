import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NguiReactModule } from '@ngui/react';
import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, NguiReactModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
