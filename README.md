# gulp-markdownit [![NPM version](https://img.shields.io/npm/v/gulp-markdownit.svg)](https://npmjs.org/package/gulp-markdownit)

[![Build Status](https://travis-ci.org/trwolfe13/gulp-markdownit.svg?branch=master)](https://travis-ci.org/trwolfe13/gulp-markdownit) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

A plug-in for [gulp](https://github.com/gulpjs/gulp) that adds pipe support for the [markdown-it](https://github.com/markdown-it/markdown-it) library.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for use, or for development and testing purposes.

### Installing

The package can be installed using the command below. It uses a peer dependency for the `markdown-it` library, so **it will use whatever version you have installed already.**

```batchfile
npm install gulp-markdownit --save
```

### Usage

Here are some instructions on how to use the task in your projects.

#### Basic Usage

The basic usage couldn't be any simpler. Just pipe your markdown into the function and watch as HTML comes out the other end!

```javascript
const markdown = require('gulp-markdownit')

gulp.task('markdown', () => {
  return gulp.src("*.md")
    .pipe(markdown())
})
```

#### Configuring

The markdown-it library supports a lot of options, and often plugins offer up their own configuration options too. These can be supplied as a config object when configuring the pipe. Options that get passed to the markdown-it instance need to be declared as part of an `options` attribute on the config object, as per the example below.

This object is passed to the markdown-it instance (copied through `Object.assign`) so as new properties are added to the markdown-it library, this library should stay up to date, provided you update your markdown-it dependency. These options are also passed on to any plugins that you enable.

```javascript
const markdown = require('gulp-markdownit')

gulp.task('markdown', () => {
  const config = {
    options: {
      html: true,
      linkify: true,
      typographer: true
    }
  }
  return gulp.src("*.md")
    .pipe(markdown(config))
})
```

#### Loading Plugins

Plugins are one of the things that make the markdown-it library great, so it's only right that they should be as flexible as possible. When adding plugins, you can either provide a single plugin by itself, or pass multiple in an array.

The plugin itself can either be the plugin function object, the name of the module as a string which will be passed to `require`, or an object of the format: `{ plugin: object, options: object }`.

The reason for the last type is just in case two plugins provide options of the same name.

```javascript
const markdown = require('gulp-markdownit')
const container = require('markdown-it-container')

gulp.task('markdown', () => {
  const config = {
    plugins: container
  }
  return gulp.src("*.md")
    .pipe(markdown(config))
})
```

### Configuration

Below is a list of all the available configuration options.

#### disable

Type: `string|string[]`

This argument is passed to the [`MarkdownIt.disable`](https://markdown-it.github.io/markdown-it/#MarkdownIt.disable) method and allows you to disable the rules with the given names.

#### enable

Type: `string|string[]`

This argument is passed to the [`MarkdownIt.enable`](https://markdown-it.github.io/markdown-it/#MarkdownIt.enable) method and allows you to enable the rules with the given names.

#### options

Type: `object`

This object is passed into the markdown-it constructor on instantiation. Refer to the [markdown-it documentation](https://markdown-it.github.io/markdown-it/#MarkdownIt.new) for the full list of options.

#### plugins

Type: `[function|string|{plugin: function, options: object}]`

#### preset

Type: `string` default: `'default'`

Currently accepts `commonmark`, `default` and `zero`. See [MarkdownIt.new](https://markdown-it.github.io/markdown-it/#MarkdownIt.new) for more information.

## Installing Dependencies

Installing the dependencies is done using a standard ```npm install```.

## Running the Tests

Tests are written using Mocha. The following command will run the tests.

```batchfile
npm test
```

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/trwolfe13/gulp-markdownit/tags).

## Authors

* **Tom Wolfe** - *Initial work* - [trwolfe13](https://github.com/trwolfe13)

See also the list of [contributors](https://github.com/trwolfe13/gulp-markdownit/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details
