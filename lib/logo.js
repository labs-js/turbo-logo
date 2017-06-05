#!/user/bin/env node

module.exports = logoGenerator;

function logoGenerator(string, color, options) {
    'use strict';
    var figlet = require('figlet'),
        colors = require('colors/safe'),
        asciiArt;

    if (!options) {
        options = {};
    }

    if (options && options.dataOnly) {
        return getData(string);
    }

    function getData(string, options) {
        var asciiArt = figlet.textSync(string || '', options);

        return colors[color || 'rainbow'](asciiArt);
    }

    try {
        asciiArt = getData(string, options);
        console.log(colors[color || 'rainbow'](asciiArt));
    } catch (err) {
        console.log(colors['red']('turbo-logo ' + err));
    }
}
