#!/user/bin/env node

var figlet = require('figlet'),
    colors = require('safe/colors');

module.exports = logoGenerator;

function logoGenerator(string, type, color) {
    'use strict';
    figlet(string, type || 'Standard', function(err, data) {
        if (err) {
            console.log('Something went wrong...');
            console.dir(err);
            return;
        }
        return colors[color || 'rainbow'](data);
    });
}
