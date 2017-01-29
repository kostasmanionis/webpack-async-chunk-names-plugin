const webpack = require('webpack');
const exampleConfiguration = require('../example/webpack.config');

describe('Async chunk name plugin', () => {

    it('should have someAsyncChunk1 as an asset', (done) => {
        webpack(exampleConfiguration, (err, stats) => {
            const assetNames = Object.keys(stats.compilation.assets);
            expect(assetNames).toContain('someAsyncChunk1.js')
            done();
        });
    });

    it('should have someAsyncChunk2 as an asset', (done) => {
        webpack(exampleConfiguration, (err, stats) => {
            const assetNames = Object.keys(stats.compilation.assets);
            expect(assetNames).toContain('someAsyncChunk1.js')
            done();
        });
    });
});
