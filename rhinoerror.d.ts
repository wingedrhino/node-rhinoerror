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
     * @param {Error | null | undefined} error the cause of this error (another error object) or null if no cause
     * @param {any | null | undefined} debugInfo information that'll be useful to developers to debug this error
     * @param {any | null | undefined} userInfo information that'll be useful to the user to understand this error
     */
    constructor(code: string, message: string, error: Error | null | undefined, debugInfo: any | null | undefined, userInfo: any | null | undefined);
    code: string;
    cause: Error;
    stack: string;
    debugInfo: any;
    userInfo: any;
}
