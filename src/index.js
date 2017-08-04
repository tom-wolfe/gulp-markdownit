const gutil = require('gulp-util')
const through = require('through2')

const PLUGIN_NAME = 'gulp-markdownit'

const useMarkdownItPlugin = (md, plugin) => {
  if (typeof plugin === 'string' || plugin instanceof String) {
    md.use(require(plugin), md.options)
  } else if (typeof plugin === 'function') {
    md.use(plugin, md.options)
  } else if (Array.isArray(plugin)) {
    md.use(plugin[0], plugin[1])
  } else {
    md.use(plugin.plugin, plugin.options)
  }
}

const gulpMarkdownIt = (options) => {
  const defaultOptions = {
    options: {},
    plugins: [],
    preset: 'default',
    enable: null,
    disable: null
  }

  // Apply the configuration options.
  options = Object.assign(defaultOptions, options)
  const md = require('markdown-it')(options.preset, options.options)
  if (options.enable) { md.enable(options.enable) }
  if (options.disable) { md.disable(options.disable) }

  // Apply each plug-in if an array was supplied, otherwise assume single plug-in.
  if (Array.isArray(options.plugins)) {
    options.plugins.forEach(plugin => {
      useMarkdownItPlugin(md, plugin)
    })
  } else {
    useMarkdownItPlugin(md, options.plugins)
  }

  return through.obj(function (file, encoding, cb) {
    if (file.isNull() || file.content === null) { return cb(null, file) }
    if (file.isStream()) {
      return cb(new gutil.PluginError(PLUGIN_NAME, 'Streaming is not supported'), null)
    }
    try {
      file.contents = Buffer.from(md.render(file.contents.toString()), encoding)
      file.path = gutil.replaceExtension(file.path, '.html')
      return cb(null, file)
    } catch (err) {
      return cb(new gutil.PluginError(PLUGIN_NAME, err, {
        fileName: file.path,
        showstack: true
      }), null)
    }
  })
}

module.exports = gulpMarkdownIt
