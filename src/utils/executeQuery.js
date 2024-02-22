import client from '../services/dbClient.js';

async function executeQuery(sqlQuery, values) {
    let result;
    let error;

    try {
        const response = await client.query(sqlQuery, values);
        result = response.rows[0];
    } catch (err) {
        error = new APIError(err, 500);
    }

    return { result, error };
}

export default executeQuery;
