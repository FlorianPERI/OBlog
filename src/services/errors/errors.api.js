/**
 * Custom Error class for representing API errors.
 * @class
 * @extends Error
 */
class APIError extends Error {
    /**
     * Create an APIError instance.
     * @constructor
     * @param {string} err - The error message.
     * @param {number} code - The HTTP status code associated with the error.
     */
    constructor(err, code) {
        super(err);

        /**
         * The HTTP status code associated with the error.
         * @type {number}
         */
        this.code = code;
    }
}

/**
 * Export the APIError class.
 * @exports APIError
 */
export default APIError;
