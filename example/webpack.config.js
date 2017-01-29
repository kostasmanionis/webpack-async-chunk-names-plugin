const AsyncChunkNames = require('../index');

module.exports = {
    entry: __dirname + '/entry.js',
    output: {
        filename: 'output.js',
        chunkFilename: '[name].js'
    },
    plugins: [
        new AsyncChunkNames()
    ]
};
