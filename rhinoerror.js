/**
 * RhinoError is a dependency-less Error class that can be used to create and
 * throw errors within your application. It can wrap an underlying error
 * while preserving the original stack trace. It also provides a way to
 * store debugging information about the error.
 */
export class RhinoError extends Error {
  /**
   *
   * @param {string} code a uniquely identifiable error code for this error
   * @param {string} message the message to display to the user
   * @param {Error | null | undefined} [error] the cause of this error (another error object) or null if no cause
   * @param {any | null | undefined} [debugInfo] information that'll be useful to developers to debug this error
   * @param {any | null | undefined} [userInfo] information that'll be useful to the user to understand this error
   */
  constructor (code, message, error, debugInfo, userInfo) {
    if (debugInfo !== null && debugInfo !== undefined) {
      const serializedDebugInfo = JSON.stringify(debugInfo)
      message = `${message}; debugInfo: ${serializedDebugInfo}`
    }
    super(message)
    this.name = code
    this.code = code
    this.message = message
    if (error === null) {
      this.cause = new Error(message)
    } else {
      this.cause = error
      const nMessageLines = (this.message.match(/\n/g) ?? []).length + 1
      this.stack = (this.stack ?? '').split('\n').slice(0, nMessageLines + 1).join('\n') + '\n' + (error.stack ?? '')
    }
    this.debugInfo = debugInfo
    this.userInfo = userInfo
  }
}
