import Debug from 'debug';
const debug = Debug('query');
import client from '../services/dbClient.js';

const postDatamapper = {
    async findAll() {
        const query = {
            text: `SELECT post.*, category.label as category FROM post JOIN category ON post.category_id = category.id;`,
        };
        const result = await client.query(query);
        return result.rows;
    },
    async findOne(id) {
        const query = {
            text: 'SELECT post.*, category.label as category FROM post JOIN category ON post.category_id = category.id WHERE post.id=$1;',
            values: [id],
        };

        const result = await client.query(query);
        return result.rows[0];
    },
    async findOneCategory(id) {
        const query = {
            text: 'SELECT post.*, category.label as category FROM post JOIN category ON post.category_id = category.id WHERE post.category_id=$1;',
            values: [id],
        };

        const result = await client.query(query);
        return result.rows;
    },
    async create(data) {
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
        const result = await client.query(query);

        return result.rows[0];
    },
};

export default postDatamapper;
