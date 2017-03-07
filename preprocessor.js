const typescript = require("typescript");
const babel_jest = require("babel-jest");

const tsconfig = require("./tsconfig.json");
console.log("am i happening?");
module.exports = {
  process(src,path) {
    const isTypeScript = path.endsWith('.ts') || path.endsWith('.tsx');
    const isJavaScript = path.endsWith('.js') || path.endsWith('.jsx');

    if (isTypeScript) {
      src = typescript.transpile(
        src,
        tsconfig.compilerOptions,
        path,
        []
      ); //method class = transpile
    }

    if (isJavaScript || isTypeScript) {
      const fileName = isJavaScript ? path : 'file.js';
      src = babel_jest.process(src, fileName);
    }
    
    return src;

  }
}
