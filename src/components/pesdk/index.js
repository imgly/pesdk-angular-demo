import React from 'react';
import ReactDOM from 'react-dom';
import PhotoEditorReactUI from 'photoeditorsdk/js/PhotoEditorReactUI';
import 'photoeditorsdk/css/PhotoEditorReactUI.css'

// use react2angular for simplicity
import { react2angular } from 'react2angular';


class NgPhotoEditorSDKDemo extends React.Component {
  render() {
    const { ReactComponent } = PhotoEditorReactUI
    return (<ReactComponent
          apiKey='YOURAPIKEY'
          assets={{
            baseUrl: '/node_modules/photoeditorsdk/assets'
          }}
          style={{
            width: 800,
            height: 600
          }}>
        </ReactComponent>)
  }
}

export default angular
  .module('imgly.pesdk.angular', [])
  .component('pesdkdemo', react2angular(NgPhotoEditorSDKDemo))
  .name
