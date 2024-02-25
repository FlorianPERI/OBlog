/**
 * Handle the response based on the presence of an error.
 * @function
 * @param {APIError|null} error - An APIError instance if an error occurred, or null if no error.
 * @param {Object|null} result - The result to be sent in the response.
 * @param {Object} res - Express response object.
 * @param {Function} next - Express next middleware function.
 * @returns {void}
 */
function manageResponse(error, result, res, next) {
    if (error) {
        // If an error exists, pass it to the next middleware for error handling.
        next(error);
    } else {
        // If no error, send the result as JSON in the response.
        res.json(result);
    }
}

export default manageResponse;
