<p align="center">
  <img src="https://img.ly/static/logos/PE.SDK_Logo.svg" />
</p>

# PhotoEditor SDK integration example for Angular

This repository contains an example for integrating PhotoEditor SDK into a Angular application.

## Note

[PhotoEditor SDK](https://img.ly/photo-sdk/?utm_campaign=Projects&utm_source=Github&utm_medium=Side_Projects&utm_content=Angular-Demo)
is a product of img.ly GmbH. In order to use PhotoEditor SDK inside one of your products, please
[request a license](https://img.ly/pricing/?utm_campaign=Projects&utm_source=Github&utm_medium=Side_Projects&utm_content=Angular-Demo).

## Installation v8.0

Clone the repository, inse the cloned repository run:

`npm install` or `yarn install`

Afterwards, run `npm run start` to compile the application and run a web server.

## Internet Explorer 11 support

To enable IE 11 support, add these Polyfill imports **at the top** of `src/index.tsx`, before all other imports:

```typescript
import 'react-app-polyfill/ie11'
import 'react-app-polyfill/stable'
```

Then, in `src/App.tsx`, change the imports `from 'photoeditorsdk'` to `from 'photoeditorsdk/no-polyfills'`:

```
import { Configuration, EditorApi, PhotoEditorSDKUI } from 'photoeditorsdk/no-polyfills'
import { deepmergeAll } from 'photoeditorsdk/no-polyfills'
```

See [Create React App: Supported Browsers and Features](https://create-react-app.dev/docs/supported-browsers-features/) and [react-app-polyfill](https://github.com/facebook/create-react-app/blob/master/packages/react-app-polyfill/README.md).

## License

Please see [LICENSE](LICENSE.md) for licensing details.

## Authors and Contributors

Made 2013-2020 by img.ly.

## Support or Contact

Use our [service desk](https://support.img.ly) for bug reports or support requests. To request a commercial license, please use the [license request form](https://img.ly/pricing/?utm_campaign=Projects&utm_source=Github&utm_medium=Side_Projects&utm_content=Angular-Demo) on our website.
