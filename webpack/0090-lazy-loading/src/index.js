import { log, log1, log2 } from './log'
import config from './config.json'

import $ from 'jquery';


log('ah que coucou');
log('ohoho');

console.log(config);

$.ajax('https://swapi.co/api/people/', {
    success: (data) => {
        log(data);
    }
});