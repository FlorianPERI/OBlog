import client from '../services/clients/clients.pg.js';

const categoryDatamapper = {
    async findAll() {
        const query = {
            text: `SELECT * FROM category;`,
        };
        const result = await client.query(query);
        return result.rows;
    },
};

export default categoryDatamapper;
