# gulp-markdownit [![NPM version](https://img.shields.io/npm/v/gulp-markdownit.svg)](https://npmjs.org/package/gulp-markdownit)
[![Build Status](https://travis-ci.org/trwolfe13/gulp-markdownit.svg?branch=master)](https://travis-ci.org/trwolfe13/gulp-markdownit) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

A plug-in for [gulp](https://github.com/gulpjs/gulp) that adds pipe support for the [markdown-it](https://github.com/markdown-it/markdown-it) library.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Installing

The package can be installed using the command below. It uses a peer dependency for the markdown-it library, so it will use whatever version you have installed already.

```
npm install gulp-markdownit --save
```

### Usage

```javascript
const Markdown = require('markdown-it')
const brewdown = require('brewdown')

const md = new Markdown().use(brewdown)
const html = md.render('# This is a Heading')

console.log(html)
```

## Installing Dependencies

Installing the dependencies is done using a standard ```npm install```.

## Running the Tests

Tests are written (and run) using [Jasmine](https://jasmine.github.io/). The following command will run the tests.

```
npm test
```

## Building the project

```
npm run build
```

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/trwolfe13/gulp-markdownit/tags). 

## Authors

* **Tom Wolfe** - *Initial work* - [trwolfe13](https://github.com/trwolfe13)

See also the list of [contributors](https://github.com/trwolfe13/gulp-markdownit/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details
