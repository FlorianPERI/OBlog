import Debug from 'debug';
import executeQuery from '../utils/utils.query.js';

const postDatamapper = {
    /**
     * Retrieve all posts with category labels.
     * @async
     * @returns {Promise<{result: object[], error: Error}>}
     */
    findAll: async () => {
        const query = {
            text: `SELECT post.*, category.label as category FROM post JOIN category ON post.category_id = category.id;`,
        };
        return executeQuery(query.text, query.values);
    },

    /**
     * Retrieve one post by ID with category label.
     * @async
     * @param {number} id - The ID of the post to retrieve.
     * @returns {Promise<{result: object[], error: Error}>}
     */
    findOne: async id => {
        const query = {
            text: 'SELECT post.*, category.label as category FROM post JOIN category ON post.category_id = category.id WHERE post.id=$1;',
            values: [id],
        };
        return executeQuery(query.text, query.values);
    },

    /**
     * Retrieve all posts with a specific category ID along with category labels.
     * @async
     * @param {number} id - The ID of the category to filter posts.
     * @returns {Promise<{result: object[], error: Error}>}
     */
    findOneCategory: async id => {
        const query = {
            text: 'SELECT post.*, category.label as category FROM post JOIN category ON post.category_id = category.id WHERE post.category_id=$1;',
            values: [id],
        };

        return executeQuery(query.text, query.values);
    },

    /**
     * Create a new post.
     * @async
     * @param {object} data - The data for the new post.
     * @returns {Promise<{result: object[], error: Error}>}
     */
    create: async data => {
        const query = {
            text: 'INSERT INTO post (category_id, slug, title, excerpt, content) SELECT id, $2, $3, $4, $5 FROM category WHERE label = $1 RETURNING *;',
            values: [
                data.category,
                data.slug,
                data.title,
                data.excerpt,
                data.content,
            ],
        };
        return executeQuery(query.text, query.values);
    },

    /**
     * Update a post.
     * @async
     * @param {number} id - The ID of the post to update.
     * @param {object} data - The updated data for the post.
     * @returns {Promise<{result: object[], error: Error}>}
     */
    update: async (id, data) => {
        const query = {
            text: 'UPDATE post SET category_id = (SELECT id FROM category WHERE label = COALESCE($1, label) LIMIT 1), slug = COALESCE($2, slug), title = COALESCE($3, title), excerpt = COALESCE($4, excerpt), content = COALESCE($5, content) WHERE post.id = $6 RETURNING *;',
            values: [
                data.category,
                data.slug,
                data.title,
                data.excerpt,
                data.content,
                id,
            ],
        };
        return executeQuery(query.text, query.values);
    },

    /**
     * Delete a post by ID.
     * @async
     * @param {number} id - The ID of the post to delete.
     * @returns {Promise<{result: object[], error: Error}>}
     */
    delete: async id => {
        const query = {
            text: 'DELETE FROM post WHERE id = $1 RETURNING *;',
            values: [id],
        };
        return executeQuery(query.text, query.values);
    },
};

export default postDatamapper;
