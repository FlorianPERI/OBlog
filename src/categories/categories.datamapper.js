import executeQuery from '../utils/utils.query.js';

const categoryDatamapper = {
    async findAll() {
        const query = {
            text: `SELECT * FROM category;`,
        };
        return executeQuery(query.text, query.values);
    },
    async findOne(id) {
        const query = {
            text: 'SELECT * FROM category WHERE id =$1;',
            values: [id],
        };
        return executeQuery(query.text, query.values);
    },
    async create(data) {
        const query = {
            text: 'INSERT INTO category (route, label) VALUES ($1, $2) RETURNING *;',
            values: [data.route, data.label],
        };
        return executeQuery(query.text, query.values);
    },
    async update(id, data) {
        const query = {
            text: 'UPDATE category SET route = COALESCE($1, route), label = COALESCE($2, label) WHERE id = $3 RETURNING *;',
            values: [data.route, data.label, id],
        };
        return executeQuery(query.text, query.values);
    },
    async delete(id) {
        const query = {
            text: 'DELETE FROM category WHERE id = $1 RETURNING *;',
            values: [id],
        };
        return executeQuery(query.text, query.values);
    },
};

export default categoryDatamapper;
