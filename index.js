const webpack = require('webpack')
const path = require('path')
const AsyncDependenciesBlock = require('webpack/lib/AsyncDependenciesBlock');
const DEP_BLOCK_NAME = 'AsyncDependenciesBlock';

function checkConstructorNames(object) {
    const obj = Object.getPrototypeOf(object);
    if(obj) {
        if (obj.constructor.name === DEP_BLOCK_NAME) {
            return true;
        } else {
            return checkConstructorNames(obj);
        }
    } else {
        return false;
    }
}

function AsyncChunkNames() {}

AsyncChunkNames.prototype.apply = function (compiler) {
    compiler.plugin('compilation', function (compilation) {
        compilation.plugin('seal', function () {
            compilation.modules.forEach(function (module) {
                module.blocks.forEach(function (block) {
                    if (checkConstructorNames(block)) {
                        block.dependencies.forEach(function (dependency) {
                            const parsedPath = path.parse(dependency.module.resource);
                            dependency.block.chunkName = parsedPath.name;
                            dependency.block.name = parsedPath.name;
                        });
                    }
                });
            });
        });
    });
}

module.exports = AsyncChunkNames;
