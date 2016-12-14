#!/user/bin/env node

module.exports = logoGenerator;

function logoGenerator(string, color, fontType) {
    'use strict';
    var figlet = require('figlet'),
        colors = require('colors/safe');

    figlet(string || '', fontType || 'Standard', function(err, data) {
        if (err) {
            console.log('Something went wrong...');
            console.dir(err);
            return;
        }
        console.log(colors[color || 'rainbow'](data));
    });
}
