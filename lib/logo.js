#!/user/bin/env node

module.exports = logoGenerator;

function logoGenerator(string, type, color) {
    'use strict';
    var figlet = require('figlet'),
        colors = require('colors/safe');

    figlet(string || '', type || 'Standard', function(err, data) {
        if (err) {
            console.log('Something went wrong...');
            console.dir(err);
            return;
        }
        console.log(colors[color || 'rainbow'](data));
    });
}
