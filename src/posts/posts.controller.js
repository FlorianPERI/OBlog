import { postDatamapper } from '../app.datamapper.js';
import manageResponse from '../utils/utils.responses.js';

const postController = {
    async findAll(req, res, next) {
        const { result, error } = await postDatamapper.findAll();
        manageResponse(error, result, res, next);
    },
    async findOne(req, res, next) {
        const { id } = req.params;
        const { result, error } = await postDatamapper.findOne(id);
        manageResponse(error, result[0], res, next);
    },
    async findOneCategory(req, res, next) {
        const { id } = req.params;
        const { result, error } = await postDatamapper.findOneCategory(id);
        manageResponse(error, result, res, next);
    },
    async create(req, res, next) {
        const data = req.body;
        const { result, error } = await postDatamapper.create(data);
        manageResponse(error, result[0], res, next);
    },
    async update(req, res, next) {
        const data = req.body;
        const { id } = req.params;
        const { result, error } = await postDatamapper.update(id, data);
        manageResponse(error, result, res, next);
    },
    async delete(req, res, next) {
        const { id } = req.params;
        const { result, error } = await postDatamapper.delete(id);
        manageResponse(error, result[0], res, next);
    },
};

export default postController;
