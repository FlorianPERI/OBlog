import Debug from 'debug';
const debug = Debug('query');
import executeQuery from '../utils/utils.query.js';

const postDatamapper = {
    async findAll() {
        const query = {
            text: `SELECT post.*, category.label as category FROM post JOIN category ON post.category_id = category.id;`,
        };
        return executeQuery(query.text, query.values);
    },
    async findOne(id) {
        const query = {
            text: 'SELECT post.*, category.label as category FROM post JOIN category ON post.category_id = category.id WHERE post.id=$1;',
            values: [id],
        };
        return executeQuery(query.text, query.values);
    },
    async findOneCategory(id) {
        const query = {
            text: 'SELECT post.*, category.label as category FROM post JOIN category ON post.category_id = category.id WHERE post.category_id=$1;',
            values: [id],
        };

        return executeQuery(query.text, query.values);
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
        return executeQuery(query.text, query.values);
    },
    async update(id, data) {
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
    async delete(id) {
        const query = {
            text: 'DELETE FROM post WHERE id = $1 RETURNING *;',
            values: [id],
        };
        return executeQuery(query.text, query.values);
    },
};

export default postDatamapper;
