import { log, log1, log2 } from './log'
import config from './config.json'

//import $ from 'jquery';


log('ah que coucou');
log('ohoho');

console.log(config);



const button = document.getElementById('clickme');

button.addEventListener('click', (e) => {
    import('jquery').then((jQuery) => {
        window.$ = jQuery;
        $('body').css('backgroundColor', '#00FF00');

        $.ajax('https://swapi.co/api/people/', {
            success: (data) => {
                log(data);
            }
        });
    })
})