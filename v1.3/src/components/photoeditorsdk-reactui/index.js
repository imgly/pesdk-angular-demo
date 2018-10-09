import React from 'react';
import PhotoEditorReactUI from 'photoeditorsdk/js/PhotoEditorSDK.UI.ReactUI.js';
import 'photoeditorsdk/css/PhotoEditorSDK.UI.ReactUI.css'
import globals from  '../../globals'
let license = globals.license

// use react2angular for simplicity
import { react2angular } from 'react2angular';

class NgPhotoEditorSDKDemo extends React.Component {
  render() {
    const { ReactComponent } = PhotoEditorReactUI
    return (<ReactComponent
          license={license}
          assets={{
            baseUrl: '/node_modules/photoeditorsdk/assets'
          }}
          style={{
            width: 1024,
            height: 568
          }}>
        </ReactComponent>)
  }
}

export default angular
  .module('imgly.pesdk.ui.react.angular', [])
  .component('photoeditorsdkreactui', react2angular(NgPhotoEditorSDKDemo))
  .name
