const { FuseBox, WebIndexPlugin } = require("fuse-box");
const { isConstructorDeclaration } = require("typescript");

const fuse = FuseBox.init({
    homeDir: "src",
    output: "build/$name.js",
    cache: true,
    plugins: [WebIndexPlugin({ tem})],
    tsConfig: "./tsconfig.json"
  });

  fuse
  .bundle("test")
  .instructions("> index.ts")
  .hmr();

fuse.dev({
  port: 4309
});
  
fuse.run().then(() => console.log('finish'));
