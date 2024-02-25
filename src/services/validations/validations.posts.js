import APIError from '../errors/errors.api.js';
import {
    schemaAddPost,
    schemaUpdatePost,
    schemaAddCategory,
    schemaUpdateCategory,
} from './validations.schema.js';

/**
 * Middleware function for validating a request body against a Joi schema.
 * @function
 * @param {Joi.Schema} schema - The Joi schema to validate against.
 * @param {Object} req - Express request object.
 * @param {Object} res - Express response object.
 * @param {Function} next - Express next middleware function.
 * @returns {void}
 */
const validateSchema = (schema, req, res, next) => {
    const { error } = schema.validate(req.body);
    if (error) {
        next(new APIError(error, 400));
    } else {
        next();
    }
};

/**
 * Object containing validation middleware functions for different API operations.
 * @namespace
 * @property {Function} validateAddPost - Middleware to validate the request body for adding a post.
 * @property {Function} validateUpdatePost - Middleware to validate the request body for updating a post.
 * @property {Function} validateAddCategory - Middleware to validate the request body for adding a category.
 * @property {Function} validateUpdateCategory - Middleware to validate the request body for updating a category.
 */
const validationService = {
    /**
     * Middleware to validate the request body for adding a post.
     * @function
     * @memberof validationService
     * @param {Object} req - Express request object.
     * @param {Object} res - Express response object.
     * @param {Function} next - Express next middleware function.
     * @returns {void}
     */
    validateAddPost(req, res, next) {
        validateSchema(schemaAddPost, req, res, next);
    },

    /**
     * Middleware to validate the request body for updating a post.
     * @function
     * @memberof validationService
     * @param {Object} req - Express request object.
     * @param {Object} res - Express response object.
     * @param {Function} next - Express next middleware function.
     * @returns {void}
     */
    validateUpdatePost(req, res, next) {
        validateSchema(schemaUpdatePost, req, res, next);
    },

    /**
     * Middleware to validate the request body for adding a category.
     * @function
     * @memberof validationService
     * @param {Object} req - Express request object.
     * @param {Object} res - Express response object.
     * @param {Function} next - Express next middleware function.
     * @returns {void}
     */
    validateAddCategory(req, res, next) {
        validateSchema(schemaAddCategory, req, res, next);
    },

    /**
     * Middleware to validate the request body for updating a category.
     * @function
     * @memberof validationService
     * @param {Object} req - Express request object.
     * @param {Object} res - Express response object.
     * @param {Function} next - Express next middleware function.
     * @returns {void}
     */
    validateUpdateCategory(req, res, next) {
        validateSchema(schemaUpdateCategory, req, res, next);
    },
};

export default validationService;
