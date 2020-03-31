import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PhotoEditorComponent } from './components/photo-editor.component';

@NgModule({
  declarations: [
    AppComponent,
    PhotoEditorComponent,
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
