import { Component, Input, ViewChild } from '@angular/core';
import {ViewEncapsulation} from '@angular/core'; //required for external css
// Import PhotoEditor SDK React
import PhotoEditorDesktopUI from 'photoeditorsdk/js/PhotoEditorSDK.UI.DesktopUI.js';

let license = null;


// the PhotoEditorSDK expects React and ReactDom to be available in global/window
import * as React from 'react';

const image = new Image();
image.src = 'assets/example.jpg';

const defaultProps = {
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

let templateStr: string = `
  <ngui-react
    [reactComponent]="reactComponent"
    [reactProps]="reactProps">
  </ngui-react>
`;

@Component({
  selector: 'photoeditorsdk-desktopui', // define selector
  styleUrls: ['../../../node_modules/photoeditorsdk/css/PhotoEditorSDK.UI.DesktopUI.css'],
  template: templateStr,
  encapsulation: ViewEncapsulation.None // Do not encapsulate styles
})

export class PhotoEditorSDKDesktopUIComponent {
  // members
  reactComponent: React.Component;
  reactProps: any;
  // inputs
  @Input() license: string = license;
  // functions
  constructor() {
    const licenseProps = {
      license: this.license
    };

    const eventCallback = {
      ref: component => {
        component.ui.on('export', img => {
          console.log("Exported");
        })
      }
    };

    this.reactComponent = PhotoEditorDesktopUI.ReactComponent; // use the react Component
    this.reactProps = {...defaultProps, ...licenseProps, ...eventCallback};
  }
}
