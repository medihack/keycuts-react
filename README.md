# <img src="https://cdn.rawgit.com/medihack/keycuts-react/master/src/keycuts-react_logo_full.svg" height="100"></img>

_keycuts-react_ is the React wrapper for [_keycuts_](https://github.com/medihack/keycuts), a modern Javascript library for handling keyboard shortcuts.

## Installation

Install with [npm](https://www.npmjs.com/) or [Yarn](https://yarnpkg.com).

```shell
$ npm install keycuts keycuts-react --save
# or
$ yarn add keycuts keycuts-react
```

Alternatively you can [download the distributed library](https://unpkg.com/keycuts-react/dist/keycuts-react.min.js) and link it into your webpage below the `keycuts` library.

```html
<script src="keycuts.min.js"></script>
<script src="keycuts-react.min.js"></script>
```

## Usage

```js
// Import using ES6 modules syntax
import Keycuts from 'keycuts-react'

// Include it in your component
...
render() {
  return (
    <Keycuts bind={myBindings} watch={myWatchers} />
}
...
```

If the `Keycuts` element does not have any children it listens to key events of the `window` object. Otherwise it will just listen to events that are bubbling up from its children.

## Development

For development fetch the code from Github and install the dependencies.

```shell
$ git clone https://github.com/medihack/keycuts-react.git
$ cd keycuts-react
$ npm install # or yarn install
```

_keycuts-react_ uses Webpack to transpile the source code (`src/`) into a minified and non-minified bundle in the `dist/` folder.

```shell
$ npm run build
```

Run the test suite (using Jest) once or continously when a source or test file was changed.

```shell
// Run all tests once
$ npm run test
// or continously
$ npm run test:watch
```

More scripts to manage the library can be found in the scripts section in the (./package.json) file.

To contribute, please fork, add your code, write tests for it and submit a pull request.

## License

[MIT © Kai Schlamp](./LICENSE)
