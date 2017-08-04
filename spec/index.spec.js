const assert = require('assert')
const File = require('vinyl')
const markdownIt = require('../')
const eventStream = require('event-stream')

const createFile = (contents) => {
  return new File({
    path: 'test',
    contents: contents
  })
}

describe('gulp-markdownit', function () {
  it('should render markdown if a buffer is provided.', function (done) {
    var task = markdownIt()
    task.write(createFile(Buffer.from('# Heading')))
    task.once('data', function (file) {
      assert(file.isBuffer())
      assert.equal(file.contents.toString(), '<h1>Heading</h1>\n')
      done()
    })
  })
  it('errors when a stream is provided', function (done) {
    var task = markdownIt()
    assert.throws(() => {
      task.write(createFile(eventStream.readArray(['# Heading'])))
    })
    done()
  })
})
