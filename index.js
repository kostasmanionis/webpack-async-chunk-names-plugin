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
                        const format = path.parse(dependency.userRequest);
                        dependency.block.chunkName = format.name;
                        dependency.block.name = format.name;
                    });
                });
            });
        });
    });
}

module.exports = AsyncChunkNames;