/**
 * RhinoError is a dependency-less Error class that can be used to create and
 * throw errors within your application. It can wrap an underlying error
 * while preserving the original stack trace. It also provides a way to
 * store debugging information about the error.
 */
export class RhinoError extends Error {
  /**
   *
   * @param {any} code a uniquely identifiable error code for this error
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
    if (error === null || error === undefined) {
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

/**
 * HttpErrors contain common HTTP status codes that you
 * can use to throw errors from your application.
 */
export const HttpErrors = {
  BadRequest: 400,
  Unauthorized: 401,
  PaymentRequired: 402,
  Forbidden: 403,
  NotFound: 404,
  MethodNotAllowed: 405,
  NotAcceptable: 406,
  ProxyAuthorizationRequired: 407,
  RequestTimeout: 408,
  Conflict: 409,
  Gone: 410,
  LengthRequired: 411,
  PreconditionFailed: 412,
  PayloadTooLarge: 413,
  URITooLong: 414,
  UnsupportedMediaType: 415,
  RangeNotSatisfiable: 416,
  ExpectationFailed: 417,
  ImATeapot: 418,
  MisdirectedRequest: 421,
  UnprocessableEntity: 422,
  Locked: 423,
  FailedDependency: 424,
  TooEarly: 425,
  UpgradeRequired: 426,
  PreconditionRequired: 428,
  TooManyRequests: 429,
  RequestHeaderFieldsTooLarge: 431,
  UnavailableForLegalReasons: 451,
  InternalServerError: 500,
  NotImplemented: 501,
  BadGateway: 502,
  ServiceUnavailable: 503,
  GatewayTimeout: 504,
  HTTPVersionNotSupported: 505,
  VariantAlsoNegotiates: 506,
  InsufficientStorage: 507,
  LoopDetected: 508,
  NotExtended: 510,
  NetworkAuthenticationRequired: 511
}
