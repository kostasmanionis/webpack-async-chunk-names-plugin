const webpack = require('webpack')
const path = require('path')

function AsyncChunkNames() {

}

AsyncChunkNames.prototype.apply = function (compiler) {
    compiler.plugin('compilation', function (compilation) {
        compilation.plugin('seal', function () {
            compilation.modules.forEach(function (module) {
                module.blocks.forEach(function (block) {
                    block.dependencies.forEach(function (dependency) {
                        const parsedPath = path.parse(dependency.module.resource);
                        dependency.block.chunkName = parsedPath.name;
                        dependency.block.name = parsedPath.name;
                    });
                });
            });
        });
    });
}

module.exports = AsyncChunkNames;