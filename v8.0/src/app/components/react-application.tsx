import { Injector } from '@angular/core';
import React from 'react';
import ReactDOM from 'react-dom';
import { PhotoEditorSDKUI, UIEvent } from 'photoeditorsdk';

interface IReactApplication {
  injector: Injector;
}

class PhotoEditor extends React.Component<IReactApplication, any> {
  /** If this config is changed the it will always override the control gui settings */
  config = {
    image:
      'https://static.photoeditorsdk.com/libraries/unsplash/raw/PZAxzN5DPkc.jpg',
    engine: {
      license: ''
    },
    assetBaseUrl: 'https://imgly.github.io/pesdk-html5/assets',
    library: {
      enableUpload: true,
      enableWebcam: true,
    }
  };

  editor = null;
  componentDidMount() {
    this.init();
  }

  exportfn = () => {
    this.editor.export(false).then(image => {
      console.log(image);
    });
  }

  init() {
    this.initEditor();
  }

  initEditor() {
    this.editor = new PhotoEditorSDKUI({
      ...this.config,
      container: document.getElementById('container')
    });
    this.editor.on(UIEvent.EDITOR_READY, () => {
      // console.log('Editor is ready')
    });
    this.editor.on(UIEvent.EXPORT, imageSrc => {
      // console.log('exported', imageSrc)
    });
  }

  render() {
    return <div id={'container'} className={'container'} />;
  }
}

export class ReactApplication {
  static initialize(
    containerId: string,
    injector: Injector
  ) {
    ReactDOM.render(
      <PhotoEditor injector={injector} />,
      document.getElementById(containerId)
    );
  }
}
