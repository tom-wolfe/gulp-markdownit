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

describe('gulp-markdownit', () => {
  it('should render markdown if a buffer is provided.', function (done) {
    const task = markdownIt()
    task.write(createFile(Buffer.from('# Heading')))
    task.once('data', function (file) {
      assert(file.isBuffer())
      assert.equal(file.contents.toString(), '<h1>Heading</h1>\n')
      done()
    })
  })
  it('should pass over an empty file.', () => {
    const task = markdownIt()
    task.write(createFile(null))
    task.once('data', function (file) {
      assert.equal(file.contents, null)
      done()
    })
  })
  it('should error when a stream is provided', (done) => {
    const task = markdownIt()
    assert.throws(() => {
      task.write(createFile(eventStream.readArray(['# Heading'])))
    })
    done()
  })
})
