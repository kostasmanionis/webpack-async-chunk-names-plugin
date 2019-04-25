# webpack-async-chunk-names-plugin

## Why?

Webpack names your chunks with obscure, hard to debug names like `0.js`, etc. This plugin attempts to guess the chunk name by parsing the requested filename.

There are other solutions like **[magic comments]**, but if you don't want to polute your code with build instructions, this plugin may be a better fit for your proyect.

If you need a more robust solution, PR are very welcome.

## Installation

As a devDependency!
```
npm i webpack-async-chunk-names-plugin -D
```
```
yarn add webpack-async-chunk-names-plugin -D
```

## Usage

```
const AsyncChunkNames = require('../index');

module.exports = {
    entry: __dirname + '/entry.js',
    output: {
        path: __dirname + '/output',
        filename: 'output.js',
        chunkFilename: '[name].js'
    },
    plugins: [
        new AsyncChunkNames()
    ]
};

```

Don't forget to set [output.chunkFilename]!

[output.chunkFilename]: https://webpack.js.org/configuration/output/#output-chunkfilename!
[magic comments]: https://webpack.js.org/api/module-methods/#magic-comments
