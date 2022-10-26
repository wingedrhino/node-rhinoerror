/**
 * HttpErrors contain common HTTP status codes that you
 * can use to throw errors from your application.
 */
export declare const HttpErrorCodes: {
    BadRequest: number;
    Unauthorized: number;
    PaymentRequired: number;
    Forbidden: number;
    NotFound: number;
    MethodNotAllowed: number;
    NotAcceptable: number;
    ProxyAuthorizationRequired: number;
    RequestTimeout: number;
    Conflict: number;
    Gone: number;
    LengthRequired: number;
    PreconditionFailed: number;
    PayloadTooLarge: number;
    URITooLong: number;
    UnsupportedMediaType: number;
    RangeNotSatisfiable: number;
    ExpectationFailed: number;
    ImATeapot: number;
    MisdirectedRequest: number;
    UnprocessableEntity: number;
    Locked: number;
    FailedDependency: number;
    TooEarly: number;
    UpgradeRequired: number;
    PreconditionRequired: number;
    TooManyRequests: number;
    RequestHeaderFieldsTooLarge: number;
    UnavailableForLegalReasons: number;
    InternalServerError: number;
    NotImplemented: number;
    BadGateway: number;
    ServiceUnavailable: number;
    GatewayTimeout: number;
    HTTPVersionNotSupported: number;
    VariantAlsoNegotiates: number;
    InsufficientStorage: number;
    LoopDetected: number;
    NotExtended: number;
    NetworkAuthenticationRequired: number;
};
export declare const HttpErrorNameToCode: Map<string, number>;
export declare const HttpErrorCodeToName: Map<number, string>;
/**
 * RhinoError is a dependency-less Error class that can be used to create and
 * throw errors within your application. It can wrap an underlying error
 * while preserving the original stack trace. It also provides a way to
 * store debugging information about the error.
 * It can be used both in a regular backend application, or in a web context,
 * where it automatically sets the HTTP status code.
 */
export declare class RhinoError extends Error {
    code: any;
    debugInfo?: any;
    userInfo?: any;
    /**
     * RhinoError constructor
     * @param code A unique error code for the error.
     * @param message A human-readable error message.
     * @param error An underlying error that caused this error to be thrown.
     * @param debugInfo Information that can be used to debug the error.
     * @param userInfo Information that can be used to inform the user about the error.
     */
    constructor(code: number | string, message: string, error?: Error | null, debugInfo?: any, userInfo?: any);
}
//# sourceMappingURL=rhinoerror.d.ts.map