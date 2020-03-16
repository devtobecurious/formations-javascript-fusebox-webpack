import { log, log1, log2 } from './log';
import config from './config.json';


log('ah que coucou');
log('ohoho');

console.log(config);



const button = document.getElementById('clickme');

// https://babeljs.io/docs/en/babel-plugin-syntax-dynamic-import/
// npm install --save-dev @babel/plugin-syntax-dynamic-import

button.addEventListener('click', (e) => {
    console.log('coucou');
    import(/* webpackChunkName: "jquery" */ 'jquery').then((jQuery) => {
        window.$ = jQuery.default;
        //window.jQuery = jQuery;
        console.log(jQuery);

        window.$('body').css('backgroundColor', '#00FF00');
        
        window.$.ajax('https://swapi.co/api/people/', {
            success: (data) => {
                log(data);
            }
        });
    });
})