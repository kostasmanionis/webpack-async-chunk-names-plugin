const path = require('path');

const checkConstructorName = block => {
  const blockPrototype = Object.getPrototypeOf(block);

  if (blockPrototype) {
    if (blockPrototype.constructor.name === 'AsyncDependenciesBlock') {
      return true;
    }

    return checkConstructorName(blockPrototype);
  }

  return false;
};

class AsyncChunkNames {
  apply(compiler) {
    compiler.plugin('compilation', compilation => {
      compilation.plugin('seal', () => {
        compilation.modules.forEach(module => {
          module.blocks.forEach(block => {
            if (checkConstructorName(block)) {
              block.dependencies.forEach(dependency => {
                const { name: pathName, dir: pathDir } = path.parse(
                  dependency.module.resource
                );

                if (pathName === 'index') {
                  const fileName = pathDir.split('/').pop();

                  dependency.block.chunkName = fileName;
                  dependency.block.name = fileName;
                } else {
                  dependency.block.chunkName = pathName;
                  dependency.block.name = pathName;
                }
              });
            }
          });
        });
      });
    });
  }
}

module.exports = AsyncChunkNames;
