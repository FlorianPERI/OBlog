import { postDatamapper } from '../app.datamapper.js';
import manageResponse from '../utils/utils.responses.js';

const postController = {
    async findAll(req, res) {
        const result = await postDatamapper.findAll();
        res.json(result);
    },
    async findOne(req, res, next) {
        const { id } = req.params;
        const { result, error } = await postDatamapper.findOne(id);
        console.log(result);
        manageResponse(error, result, res, next);
    },
    async findOneCategory(req, res) {
        const { id } = req.params;
        const result = await postDatamapper.findOneCategory(id);
        res.json(result);
    },
    async create(req, res) {
        const data = req.body;
        const result = await postDatamapper.create(data);
        res.json(result);
    },
};

export default postController;
