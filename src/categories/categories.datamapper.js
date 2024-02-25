import executeQuery from '../utils/utils.query.js';

/**
 * Data mapper for category-related database operations.
 * @type {Object}
 */
const categoryDatamapper = {
    /**
     * Retrieve all categories.
     * @async
     * @returns {Promise<{result: Object[], error: Error}>} The result and error of the operation.
     */
    findAll: async () => {
        const query = {
            text: `SELECT * FROM category;`,
        };
        return executeQuery(query.text, query.values);
    },

    /**
     * Retrieve one category by ID.
     * @async
     * @param {number} id - The ID of the category to retrieve.
     * @returns {Promise<{result: Object[], error: Error}>} The result and error of the operation.
     */
    findOne: async id => {
        const query = {
            text: 'SELECT * FROM category WHERE id =$1;',
            values: [id],
        };
        return executeQuery(query.text, query.values);
    },

    /**
     * Create a new category.
     * @async
     * @param {Object} data - The data for creating the category.
     * @returns {Promise<{result: Object[], error: Error}>} The result and error of the operation.
     */
    create: async data => {
        const query = {
            text: 'INSERT INTO category (route, label) VALUES ($1, $2) RETURNING *;',
            values: [data.route, data.label],
        };
        return executeQuery(query.text, query.values);
    },

    /**
     * Update a category by ID.
     * @async
     * @param {number} id - The ID of the category to update.
     * @param {Object} data - The data for updating the category.
     * @returns {Promise<{result: Object[], error: Error}>} The result and error of the operation.
     */
    update: async (id, data) => {
        const query = {
            text: 'UPDATE category SET route = COALESCE($1, route), label = COALESCE($2, label) WHERE id = $3 RETURNING *;',
            values: [data.route, data.label, id],
        };
        return executeQuery(query.text, query.values);
    },

    /**
     * Delete a category by ID.
     * @async
     * @param {number} id - The ID of the category to delete.
     * @returns {Promise<{result: Object[], error: Error}>} The result and error of the operation.
     */
    delete: async id => {
        const query = {
            text: 'DELETE FROM category WHERE id = $1 RETURNING *;',
            values: [id],
        };
        return executeQuery(query.text, query.values);
    },
};

export default categoryDatamapper;
