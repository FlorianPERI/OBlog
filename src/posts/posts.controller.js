import { postDatamapper } from '../app.datamapper.js';
import manageResponse from '../utils/utils.responses.js';

/**
 * Controller for handling posts.
 * @namespace
 * @name postController
 */
const postController = {
    /**
     * Retrieve all posts.
     * @async
     * @function
     * @param {object} req - Express request object.
     * @param {object} res - Express response object.
     * @param {function} next - Express next middleware function.
     * @returns {Promise<void>} - A promise that resolves when the operation is complete.
     */
    findAll: async (req, res, next) => {
        const { result, error } = await postDatamapper.findAll();
        manageResponse(error, result, res, next);
    },

    /**
     * Retrieve one post by ID.
     * @async
     * @function
     * @param {object} req - Express request object.
     * @param {object} res - Express response object.
     * @param {function} next - Express next middleware function.
     * @returns {Promise<void>} - A promise that resolves when the operation is complete.
     */
    findOne: async (req, res, next) => {
        const { id } = req.params;
        const { result, error } = await postDatamapper.findOne(id);
        manageResponse(error, result[0], res, next);
    },

    /**
     * Retrieve all posts with a specific category ID.
     * @async
     * @function
     * @param {object} req - Express request object.
     * @param {object} res - Express response object.
     * @param {function} next - Express next middleware function.
     * @returns {Promise<void>} - A promise that resolves when the operation is complete.
     */
    findOneCategory: async (req, res, next) => {
        const { id } = req.params;
        const { result, error } = await postDatamapper.findOneCategory(id);
        manageResponse(error, result, res, next);
    },

    /**
     * Add a new post.
     * @async
     * @function
     * @param {object} req - Express request object.
     * @param {object} res - Express response object.
     * @param {function} next - Express next middleware function.
     * @returns {Promise<void>} - A promise that resolves when the operation is complete.
     */
    create: async (req, res, next) => {
        const data = req.body;
        const { result, error } = await postDatamapper.create(data);
        manageResponse(error, result[0], res, next);
    },

    /**
     * Update a post.
     * @async
     * @function
     * @param {object} req - Express request object.
     * @param {object} res - Express response object.
     * @param {function} next - Express next middleware function.
     * @returns {Promise<void>} - A promise that resolves when the operation is complete.
     */
    update: async (req, res, next) => {
        const data = req.body;
        const { id } = req.params;
        const { result, error } = await postDatamapper.update(id, data);
        manageResponse(error, result, res, next);
    },

    /**
     * Delete a post.
     * @async
     * @function
     * @param {object} req - Express request object.
     * @param {object} res - Express response object.
     * @param {function} next - Express next middleware function.
     * @returns {Promise<void>} - A promise that resolves when the operation is complete.
     */
    delete: async (req, res, next) => {
        const { id } = req.params;
        const { result, error } = await postDatamapper.delete(id);
        manageResponse(error, result[0], res, next);
    },
};

export default postController;
