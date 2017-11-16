import React from 'react';
import ReactDom from 'react-dom';
import PhotoEditorDesktopUI from 'photoeditorsdk/js/PhotoEditorSDK.UI.DesktopUI.js';
import 'photoeditorsdk/css/PhotoEditorSDK.UI.DesktopUI.css'
import globals from  '../../globals'

let license = globals.license

// use react2angular for simplicity
import { react2angular } from 'react2angular';


window.React = window.React || React
window.ReactDom = window.ReactDom || ReactDom



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
