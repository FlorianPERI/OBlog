import client from '../services/clients/clients.pg.js';
import APIError from '../services/errors/errors.api.js';

/**
 * Execute a SQL query using the PostgreSQL client.
 * @async
 * @function
 * @param {string} sqlQuery - The SQL query to execute.
 * @param {Array} values - The parameter values to be substituted in the query.
 * @returns {Promise<{result: Array|null, error: APIError|null}>} A promise that resolves to an object containing the query result or error.
 */
async function executeQuery(sqlQuery, values) {
    let result;
    let error;

    try {
        const response = await client.query(sqlQuery, values);
        result = response.rows;
    } catch (err) {
        // If an error occurs during query execution, create an APIError instance with a 500 status code.
        error = new APIError(err, 500);
    }

    return { result, error };
}

export default executeQuery;
