const { FuseBox, WebIndexPlugin, QuantumPlugin, EnvPlugin } = require("fuse-box");
const { isConstructorDeclaration } = require("typescript");

console.log('process.env.NODE_ENV :>> ', process.env.NODE_ENV);
isProduction = process.env.NODE_ENV.trim().toLowerCase() == 'production';
console.log('isProduction :>> ', isProduction);

const fuse = FuseBox.init({
    homeDir: "src",
    output: "build/$name.js",
    cache: true,
    hash: isProduction,
    plugins: [WebIndexPlugin(), EnvPlugin(), isProduction && QuantumPlugin({ treeshake: true })],
    tsConfig: "./tsconfig.json"
  });

  fuse
  .bundle("test")
  .instructions("> index.ts")
  .hmr();

if (! isProduction) {   
    fuse.dev({
        port: 4309
    });
}
  
fuse.run().then(() => console.log('finish'));
