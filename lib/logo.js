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
        return getData;
    }

    function getData() {
        return figlet.textSync(string || '', options);
    }

    try {
        asciiArt = getData();
        console.log(colors[color || 'rainbow'](asciiArt));
    } catch (err) {
        console.log(colors['red']('turbo-logo ' + err));
    }
}
