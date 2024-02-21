import client from '../services/dbClient.js';

const postDatamapper = {
    async findAll(req, res) {
        const query = {
            text: `SELECT * FROM post;`,
        };
        const result = await client.query(query);
        return result.rows;
    },
};

export default postDatamapper;
