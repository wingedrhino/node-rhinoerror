/**
 * HttpErrors contain common HTTP status codes that you
 * can use to throw errors from your application.
 */
export const HttpErrorCodes = {
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

export const HttpErrorNameToCode = new Map<string, number>(Object.entries(HttpErrorCodes))
export const HttpErrorCodeToName = new Map<number, string>(Object.entries(HttpErrorCodes).map(([k, v]) => [v, `HttpError${k}`]))

/**
 * RhinoError is a dependency-less Error class that can be used to create and
 * throw errors within your application. It can wrap an underlying error
 * while preserving the original stack trace. It also provides a way to
 * store debugging information about the error.
 * It can be used both in a regular backend application, or in a web context,
 * where it automatically sets the HTTP status code.
 */
export class RhinoError extends Error {
  public code: any
  public debugInfo?: any
  public userInfo?: any
  /**
   * RhinoError constructor
   * @param code A unique error code for the error.
   * @param message A human-readable error message.
   * @param error An underlying error that caused this error to be thrown.
   * @param debugInfo Information that can be used to debug the error.
   * @param userInfo Information that can be used to inform the user about the error.
   */
  constructor (code: number | string, message: string, error?: Error | null, debugInfo?: any, userInfo?: any) {
    if (debugInfo !== null && debugInfo !== undefined) {
      const serializedDebugInfo = JSON.stringify(debugInfo)
      message = `${message}; debugInfo: ${serializedDebugInfo}`
    }
    super(message)
    this.message = message
    this.code = code
    this.name = 'RhinoError'
    if (typeof code === 'number') {
      if (HttpErrorCodeToName.has(code)) {
        this.name = HttpErrorCodeToName.get(code) as string
      }
    } else if (typeof code === 'string') {
      this.name = code
    }
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
