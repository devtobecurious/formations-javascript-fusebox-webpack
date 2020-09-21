const { FuseBox, WebIndexPlugin, CSSPlugin, SVGPlugin } = require("fuse-box");

const fuse =  FuseBox.init({
    homeDir : "./src",
    output : "./dist/$name.js",
    useTypescriptCompiler : true,
    plugins: [
      CSSPlugin(),
      SVGPlugin(),
      WebIndexPlugin({
        template : "src/index.html",
        author : "Auth0 Inc.",
        title : "A simple React application !",
        keywords : "react, fusebox, building system, bundle"
      })
    ]
  });

fuse.dev();

fuse.bundle('vendors')
    .instructions('~ index.tsx');

fuse.bundle('app')
    .instructions('> [index.tsx]')
    .watch()
    .hmr();
fuse.run();
