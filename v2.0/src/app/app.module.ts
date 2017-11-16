import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NguiReactModule } from '@ngui/react';
import { AppComponent } from './app.component';
// components
import { PhotoEditorSDKDesktopUIComponent } from './components/pesdk-desktopui.component'
import { PhotoEditorSDKReactUIComponent } from './components/pesdk-reactui.component'

@NgModule({
  declarations: [
    AppComponent,
    PhotoEditorSDKReactUIComponent, // Add PhotoEditorSDK React UI
    PhotoEditorSDKDesktopUIComponent // Add PhotoEditorSDK Desktop UI
  ],
  imports: [
    BrowserModule,
    NguiReactModule // required for the module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
