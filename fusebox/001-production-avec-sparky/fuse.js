const { FuseBox, WebIndexPlugin, EnvPlugin, QuantumPlugin, Sparky } = require("fuse-box");
const { src, task, watch, context, fuse } = require("fuse-box/sparky");

context(class {
  getConfig() {
    const fuse = FuseBox.init({
      homeDir: "src",
      target: "browser@es6",
      cache: true,
      debug: false,
      hash: this.isProduction,
      output: "dist/$name.js", // $name va être remplacé par le test passé en paramètre du bundle
      plugins: [WebIndexPlugin(), 
                this.isProduction && EnvPlugin(), 
                this.isProduction && QuantumPlugin({ treeshake: true, uglify: true })],
      tsConfig: "./tsconfig.json"
    });

    return fuse;
  }

  createBundle(fuse) {
    const app = fuse.bundle("test");

    if (! this.isProduction) {
      app.hmr();
      app.watch();
    }

    app.instructions('> index.ts');

    return app;
  } 
});

task('default', async context => {
  const fuse = context.getConfig();

  fuse.dev();

  context.createBundle(fuse);

  await fuse.run();
});

task('dist', async context => {
  context.isProduction = true;

  const fuse = context.getConfig();

  fuse.dev();

  context.createBundle(fuse);

  await fuse.run();
});

