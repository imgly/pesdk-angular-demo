import React from 'react';
import PhotoEditorDesktopUI from 'photoeditorsdk/js/PhotoEditorSDK.UI.DesktopUI.js';
import 'photoeditorsdk/css/PhotoEditorSDK.UI.DesktopUI.css'
import globals from  '../../globals'

let license = globals.license

// use react2angular for simplicity
import { react2angular } from 'react2angular';

class NgPhotoEditorSDKDemo extends React.Component {
  render() {
    let image = new Image()
    image.src = 'assets/example.jpg'

    const { ReactComponent } = PhotoEditorDesktopUI
    return (<ReactComponent
          license={license}
          editor= {
            {
              image: image
            }
          }
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
  .module('imgly.pesdk.ui.desktop.angular', [])
  .component('photoeditorsdkdesktopui', react2angular(NgPhotoEditorSDKDemo))
  .name
