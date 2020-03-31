import { Component, OnInit, ViewChild, Input } from "@angular/core";
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

const license = "license goes here";

@Component({
  selector: "app-photo-editor",
  templateUrl: "./photo-editor.component.html"
})
export class PhotoEditorComponent implements OnInit {
  constructor() {}

  @Input() src: string;
  @ViewChild("psdkContainer", { static: false }) container;

  image = new Image();
  editor;

  ngOnInit() {
    this.image.crossOrigin = "anonymous";
    this.image.onload = this.instantiateEditor.bind(this);
    this.image.src = this.src;
  }

  async instantiateEditor() {
    this.editor = await new PhotoEditorSDKUI.init({
      license,
      container: this.container.nativeElement,
      image: this.image,
      assetBaseUrl: "/assets/photoeditorsdk"
    });
  }
}
