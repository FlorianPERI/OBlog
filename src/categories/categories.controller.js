import { categoryDatamapper } from '../app.datamapper.js';
import manageResponse from '../utils/utils.responses.js';

const categoryController = {
    async findAll(req, res, next) {
        const { result, error } = await categoryDatamapper.findAll();
        manageResponse(error, result, res, next);
    },
    async findOne(req, res, next) {
        const { id } = req.params;
        const { result, error } = await categoryDatamapper.findOne(id);
        manageResponse(error, result[0], res, next);
    },
    async create(req, res, next) {
        const data = req.body;
        const { result, error } = await categoryDatamapper.create(data);
        manageResponse(error, result[0], res, next);
    },
    async update(req, res, next) {
        const data = req.body;
        const { id } = req.params;
        const { result, error } = await categoryDatamapper.update(id, data);
        manageResponse(error, result, res, next);
    },
    async delete(req, res, next) {
        const { id } = req.params;
        const { result, error } = await categoryDatamapper.delete(id);
        manageResponse(error, result[0], res, next);
    },
};

export default categoryController;
