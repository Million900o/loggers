const { green, yellow, white, red, magenta } = require('colors/safe')
const util = require('util')

const defaultOptions = { debug: false, method: console.log, colors: true, newLine: false, catch: false }

class Logger {
  constructor (options = defaultOptions) {
    Object.assign(options, defaultOptions)
    this.options = options
    this.send = options.method || console.log
    if (options.catch) {
      process.on('uncaughtException', (err) => this.error('Uncaught Exception:\n' + err))
      process.on('unhandledRejection', (err) => this.error('Unhandled Rejection:\n' + err))
    }
    this.err = this.error
  }

  _formatArgs (args) {
    return this.options.colors ? this._formatColors(args.join(' '), white) : args.join(' ') + this._newLine()
  }

  _formatColors (text, color) {
    return this.options.colors ? color(text) : text
  }

  _newLine () {
    return this.options.newLine ? '\n' : ''
  }

  _parseObject (object) {
    return util.inspect(object)
  }

  /**
   * Log as [LOG]
   * @param {string} args Strings to be joined and sent
   * @returns {boolean} success
   */
  log (...args) {
    if (args.length === 0) return false
    for(let input in args) {
      if(typeof args[input] == 'object') args[input] = this._parseObject(args[input])
    }
    this.send(`${this._formatColors('[LOG]', green)} ${this._formatArgs(args)}${this._newLine()}`)
    return true
  }

  /**
   * Log as [WARN]
   * @param {string} args Strings to be joined and sent
   * @returns {boolean} success
   */
  warn (...args) {
    if (args.length === 0) return false
    for(let input in args) {
      if(typeof args[input] == 'object') args[input] = this._parseObject(args[input])
    }
    this.send(`${this._formatColors('[WARN]', yellow)} ${this._formatArgs(args)}${this._newLine()}`)
    return true
  }

  /**
   * Log as [ERROR]
   * @param {string} args Strings to be joined and sent
   * @returns {boolean} success
   */
  error (...args) {
    if (args.length === 0) return false
    for(let input in args) {
      if(typeof args[input] == 'object') args[input] = this._parseObject(args[input])
    }
    this.send(`${this._formatColors('[ERROR]', red)} ${this._formatArgs(args)}${this._newLine()}`)
    return true
  }

  /**
   * Log as [DEBUG]
   * @param {string} args Strings to be joined and sent
   * @returns {boolean} success
   */
  debug (...args) {
    if (!this.options.debug) return
    for(let input in args) {
      if(typeof args[input] == 'object') args[input] = this._parseObject(args[input])
    }
    if (args.length === 0) return false
    this.send(`${this._formatColors('[DEBUG]', magenta)} ${this._formatArgs(args)}${this._newLine()}`)
    return true
  }
}

module.exports = Logger
