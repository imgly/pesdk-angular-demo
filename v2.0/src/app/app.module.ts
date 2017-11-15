import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NguiReactModule } from '@ngui/react';
import { AppComponent } from './app.component';
// components
import { PhotoEditorReactUIComponent } from './components/pesdk.component'

@NgModule({
  declarations: [
    AppComponent,
    PhotoEditorReactUIComponent // Add PhotoEditorSD
  ],
  imports: [
    BrowserModule,
    NguiReactModule // required for the module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
