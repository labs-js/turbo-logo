#!/user/bin/env node

module.exports = logoGenerator;

function logoGenerator(string, color, options) {
    'use strict';
    var figlet = require('figlet'),
        colors = require('colors/safe'),
        asciiArt;

    if (!options) { options = {} };

    asciiArt = figlet.textSync(string || '', options);

    console.log(colors[color || 'rainbow'](asciiArt));
}
