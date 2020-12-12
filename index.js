const pkg = require('./package.json')

const Logger = require('./lib/Logger.js')
Logger.version = pkg.version

module.exports = Logger
