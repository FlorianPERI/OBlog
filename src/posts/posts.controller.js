import { postDatamapper } from '../app.datamapper.js';

const postController = {
    async findAll(req, res) {
        const result = await postDatamapper.findAll();
        res.json(result);
    },
    async findOne(req, res) {
        const { id } = req.params;
        const result = await postDatamapper.findOne(id);
        res.json(result);
    },
    async findOneCategory(req, res) {
        const { id } = req.params;
        const result = await postDatamapper.findOneCategory(id);
        console.log(result);
        res.json(result);
    },
    async create(req, res) {
        const result = await postDatamapper.create();
        console.log(result);
        res.json(result);
    },
};

export default postController;
