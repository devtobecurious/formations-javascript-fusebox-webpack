const path = require('path');

// console.log(process.env.NODE_ENV);
// console.log(path.resolve(__dirname,'dist/index-genere.html'));

const params = {
    mode: 'development',
    entry: './src/js/main.js',
    devtool: 'inline-source-map',
    output: {
        filename: 'monfichier.js',
        path: path.resolve(__dirname, 'dist/assets/js')
    },
    optimization: {
        noEmitOnErrors: true
    }
};

module.exports = params;

// https://webpack.js.org/plugins/

// http://www.cetait-quoi-le-contexte.fr/contexte/il-faut-que-tu-aies-le-reflexe-de-rapprocher-ta-bouche