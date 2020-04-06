import { Component, AfterViewInit, ViewChild, Input } from "@angular/core";
// @ts-ignore
import { PhotoEditorSDKUI } from "photoeditorsdk";

/* React Magic */
import * as React from "react";
import * as ReactDom from "react-dom";

declare global {
  interface Window {
    React: any;
    ReactDom: any;
  }
}

window.React = window.React || React;
window.ReactDom = window.ReactDom || ReactDom;

const license = "";

@Component({
  selector: "app-photo-editor",
  templateUrl: "./photo-editor.component.html",
})
export class PhotoEditorComponent implements AfterViewInit {
  constructor() {}

  @Input() src: string;
  @ViewChild("psdkContainer", { static: false }) container;

  editor;

  ngAfterViewInit() {
    this.instantiateEditor();
  }

  async instantiateEditor() {
    try {
      this.editor = await PhotoEditorSDKUI.init({
        license,
        container: this.container.nativeElement,
        image: this.src,
        assetBaseUrl: "/assets/photoeditorsdk",
      });
    } catch (error) {
      console.log(error);
    }
  }
}
