import { categoryDatamapper } from '../datamappers/index.js';

const categoryController = {
    async findAll(req, res) {
        const result = await categoryDatamapper.findAll();
        console.log(result);
        res.json(result);
    },
};

export default categoryController;
