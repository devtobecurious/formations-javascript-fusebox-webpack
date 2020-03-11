const { FuseBox, WebIndexPlugin } = require("fuse-box");

const fuse = FuseBox.init({
  homeDir: "src",
  target: "browser@es6",
  cache: true,
  debug: false,
  hash: true,
  output: "dist/$name.js", // $name va être remplacé par le test passé en paramètre du bundle
  plugins: [WebIndexPlugin()],
  tsConfig: "./tsconfig.json"
});

fuse.dev(); // launch http server

fuse
  .bundle("test")
  .instructions("> index.ts")
  .hmr()
  .watch();
fuse.run();