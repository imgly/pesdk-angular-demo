import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ReactRendererComponent } from './components/react-renderer.component';

@NgModule({
  declarations: [
    AppComponent,
    ReactRendererComponent,
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
