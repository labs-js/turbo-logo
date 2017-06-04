[![Build Status](https://travis-ci.org/labs-js/turbo-logo.svg?)](https://travis-ci.org/labs-js/turbo-logo)
[![codecov](https://codecov.io/gh/labs-js/turbo-logo/branch/develop/graph/badge.svg)](https://codecov.io/gh/labs-js/turbo-logo)
[![npm](https://img.shields.io/npm/v/turbo-logo.svg?style=flat)](https://www.npmjs.com/package/turbo-logo)
[![Turbo Commit](https://img.shields.io/badge/Turbo_Commit-on-3DD1F2.svg)](https://github.com/labs-js/turbo-git/blob/master/CONVENTION.md)
[![bitHound](https://www.bithound.io/github/labs-js/turbo-logo/badges/score.svg)](https://www.bithound.io/github/labs-js/turbo-logo)
[![Code Climate](https://codeclimate.com/github/labs-js/turbo-commit/badges/gpa.svg)](https://codeclimate.com/github/labs-js/turbo-logo)

# turbo-logo

A simple ASCII art logo maker for the Terminal

## Install

```
npm install turbo-logo
```

## How to Use


```javascript
    var turboLogo = require('turbo-logo');

    turboLogo('Hello World!!')
```

### One line terminal test:

```bash
node -e 'require("turbo-logo")("Hello World!")'
```

## What do I get?

<img alt="Screenshot" src="assests/screenshot.png"/>

## Can I change the colors?

Of course..

```bash
node -e 'require("turbo-logo")("Hello World!", "red")'
```

<img alt="Screenshot2" src="assests/screenshot2.png"/>

Avialables colors: `red`,`green`,`yellow`,`blue`,`white`,`magenta`, `cyan`, `grey` , `gray` & `black`
>The colors are the supported by the library [colors](https://www.npmjs.com/package/colors)


## Can I change the font?

Pff.. yeah

<img alt="Screenshot3" src="assests/screenshot3.png"/>

## What if I only want the string as result?

well we can use the `dataOnly` parameter:

```bash
node -e 'require("turbo-logo")("Hello World!", "red", { "font": "Ghost", "dataOnly": true})'
```
## More is comming...
