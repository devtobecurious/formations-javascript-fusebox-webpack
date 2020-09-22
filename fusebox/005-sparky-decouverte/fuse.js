const { FuseBox, WebIndexPlugin, EnvPlugin, QuantumPlugin, Sparky } = require("fuse-box");
const { src, task, watch, context, fuse } = require("fuse-box/sparky");

context(
    class {
      getConfig() {
        return FuseBox.init({
          homeDir: "src",
          output: "dist/$name.js",
          target: "browser@es6",
          tsConfig: "./src/tsconfig.json",
          plugins: [
            !this.isProduction && WebIndexPlugin(),
            this.isProduction &&
              QuantumPlugin({
                treeshake: true
              }),
          ],
        });
      }
    },
  );

  task("default", async context => {
    const fuse = context.getConfig();
    fuse
      .bundle("test")
      .hmr()
      .watch()
      .instructions("> index.ts");
  
    await fuse.run();
  });

  task("dist", async context => {
    context.isProduction = true;
    const fuse = context.getConfig();
    fuse.bundle("test").instructions("> index.ts");
  
    await fuse.run();
  });