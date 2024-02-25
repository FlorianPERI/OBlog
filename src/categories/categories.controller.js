import { categoryDatamapper } from '../app.datamapper.js';
import manageResponse from '../utils/utils.responses.js';

const categoryController = {
    /**
     * Retrieve all categories.
     * @async
     * @param {object} req - Express request object.
     * @param {object} res - Express response object.
     * @param {Function} next - Express next middleware function.
     */
    findAll: async (req, res, next) => {
        const { result, error } = await categoryDatamapper.findAll();
        manageResponse(error, result, res, next);
    },

    /**
     * Retrieve one category by ID.
     * @async
     * @param {object} req - Express request object.
     * @param {object} res - Express response object.
     * @param {Function} next - Express next middleware function.
     */
    findOne: async (req, res, next) => {
        const { id } = req.params;
        const { result, error } = await categoryDatamapper.findOne(id);
        manageResponse(error, result[0], res, next);
    },

    /**
     * Create a new category.
     * @async
     * @param {object} req - Express request object.
     * @param {object} res - Express response object.
     * @param {Function} next - Express next middleware function.
     */
    create: async (req, res, next) => {
        const data = req.body;
        const { result, error } = await categoryDatamapper.create(data);
        manageResponse(error, result[0], res, next);
    },

    /**
     * Update a category.
     * @async
     * @param {object} req - Express request object.
     * @param {object} res - Express response object.
     * @param {Function} next - Express next middleware function.
     */
    update: async (req, res, next) => {
        const data = req.body;
        const { id } = req.params;
        const { result, error } = await categoryDatamapper.update(id, data);
        manageResponse(error, result, res, next);
    },

    /**
     * Delete a category by ID.
     * @async
     * @param {object} req - Express request object.
     * @param {object} res - Express response object.
     * @param {Function} next - Express next middleware function.
     */
    delete: async (req, res, next) => {
        const { id } = req.params;
        const { result, error } = await categoryDatamapper.delete(id);
        manageResponse(error, result[0], res, next);
    },
};

export default categoryController;
