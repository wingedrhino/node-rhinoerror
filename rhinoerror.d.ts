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
    constructor(code: any, message: string, error?: Error | null | undefined, debugInfo?: any | null | undefined, userInfo?: any | null | undefined);
    name: any;
    code: any;
    cause: Error;
    stack: string;
    debugInfo: any;
    userInfo: any;
}
export namespace HttpErrors {
    const BadRequest: number;
    const Unauthorized: number;
    const PaymentRequired: number;
    const Forbidden: number;
    const NotFound: number;
    const MethodNotAllowed: number;
    const NotAcceptable: number;
    const ProxyAuthorizationRequired: number;
    const RequestTimeout: number;
    const Conflict: number;
    const Gone: number;
    const LengthRequired: number;
    const PreconditionFailed: number;
    const PayloadTooLarge: number;
    const URITooLong: number;
    const UnsupportedMediaType: number;
    const RangeNotSatisfiable: number;
    const ExpectationFailed: number;
    const ImATeapot: number;
    const MisdirectedRequest: number;
    const UnprocessableEntity: number;
    const Locked: number;
    const FailedDependency: number;
    const TooEarly: number;
    const UpgradeRequired: number;
    const PreconditionRequired: number;
    const TooManyRequests: number;
    const RequestHeaderFieldsTooLarge: number;
    const UnavailableForLegalReasons: number;
    const InternalServerError: number;
    const NotImplemented: number;
    const BadGateway: number;
    const ServiceUnavailable: number;
    const GatewayTimeout: number;
    const HTTPVersionNotSupported: number;
    const VariantAlsoNegotiates: number;
    const InsufficientStorage: number;
    const LoopDetected: number;
    const NotExtended: number;
    const NetworkAuthenticationRequired: number;
}
