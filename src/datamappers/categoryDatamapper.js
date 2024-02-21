import client from '../services/dbClient.js';

const categoryDatamapper = {
    async findAll(req, res) {
        const query = {
            text: `SELECT * FROM category;`,
        };
        const result = await client.query(query);
        return result.rows;
    },
};

export default categoryDatamapper;
