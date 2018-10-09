import { Component, Input, ViewChild } from '@angular/core';
import {ViewEncapsulation} from '@angular/core'; //required for external css
// Import PhotoEditor SDK React
import PhotoEditorReactUI from 'photoeditorsdk/js/PhotoEditorSDK.UI.ReactUI.js';

const license = null;


// the PhotoEditorSDK expects React and ReactDom to be available in global/window
import * as React from 'react';

const image = new Image();
image.src = 'assets/example.jpg';

const defaultProps = {
  // license: license,
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
};

const templateStr: string = `
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
 // members
 reactComponent: React.Component;
 reactProps: any
 // inputs
 @Input() license: string = license;
 // functions
 constructor() {
   const licenseProps = {
     license: this.license
   };

    this.reactComponent = PhotoEditorReactUI.ReactComponent; // use the react Component
    this.reactProps = {...defaultProps, ...licenseProps};
  }
}
