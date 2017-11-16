import { Component, Input, ViewChild } from '@angular/core';
import {ViewEncapsulation} from '@angular/core'; //required for external css
// Import PhotoEditor SDK React
import PhotoEditorReactUI from 'photoeditorsdk/js/PhotoEditorSDK.UI.ReactUI.js';

const license = 'YOURLICENSEFILE'


// the PhotoEditorSDK expects React and ReactDom to be available in global/window
import * as React from 'react';
import * as ReactDom from 'react-dom'

declare global {
  interface Window { React: any; ReactDom: any; }
}

window.React = window.React || React
window.ReactDom = window.ReactDom || ReactDom


let image = new Image()
image.src = 'assets/example.jpg'

let defaultProps = {
  license: license,
  assets: {
    baseUrl: '/assets/photoeditorsdk' // see angular-cli.json for configuraton
  },
  style:{
    width: 1024,
    height: 576
  },
  editor: {
    image: image
  }
}

let templateStr: string = `
  <ngui-react
    [reactComponent]="reactComponent"
    [reactProps]="reactProps">
  </ngui-react>
`;

@Component({
  selector: 'photoeditorsdk-reactui',
  styleUrls: ['../../../node_modules/photoeditorsdk/css/PhotoEditorSDK.UI.ReactUI.css'],
  template: templateStr,
  encapsulation: ViewEncapsulation.None
})

export class PhotoEditorSDKReactUIComponent {
 //members
 reactComponent: React.Component
 reactProps: any
 //inputs
 @Input() license: string = license;
 //functions
 constructor() {
   let licenseProps = {
     license: this.license
   }

    this.reactComponent = PhotoEditorReactUI.ReactComponent; // use the react Component
    this.reactProps = {...defaultProps, ...licenseProps}
  }
}