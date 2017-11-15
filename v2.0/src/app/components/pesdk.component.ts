import { Component, ViewChild } from '@angular/core';
import {ViewEncapsulation} from '@angular/core'; //required for external css
// Import PhotoEditor SDK React
import PhotoEditorReactUI from 'photoeditorsdk/js/PhotoEditorReactUI';


let reactProps = {
  apiKey: 'YOURAPIKEY',
  assets: {
    baseUrl: '/assets/photoeditorsdk' // see angular-cli.json for configuraton
  },
  style:{
    width: 800,
    height: 600
  }
}

let templateStr: string = `
  <ngui-react
    [reactComponent]="reactComponent"
    [reactProps]="reactProps">
  </ngui-react>
`;

@Component({
  selector: 'photoeditorsdk',
  styleUrls: ['../../../node_modules/photoeditorsdk/css/PhotoEditorReactUI.css'],
  template: templateStr,

  encapsulation: ViewEncapsulation.None
})

export class PhotoEditorReactUIComponent {
  reactComponent = PhotoEditorReactUI.ReactComponent; // use the react Component
  reactProps = reactProps;
}