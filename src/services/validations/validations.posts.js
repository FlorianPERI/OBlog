import APIError from '../errors/errors.api.js';
import {
    schemaAddPost,
    schemaUpdatePost,
    schemaAddCategory,
    schemaUpdateCategory,
} from './validations.schema.js';

const validateSchema = (schema, req, res, next) => {
    const { error } = schema.validate(req.body);
    if (error) {
        next(new APIError(error, 400));
    } else {
        next();
    }
};

const validationService = {
    validateAddPost(req, res, next) {
        validateSchema(schemaAddPost, req, res, next);
    },
    validateUpdatePost(req, res, next) {
        validateSchema(schemaUpdatePost, req, res, next);
    },
    validateAddCategory(req, res, next) {
        validateSchema(schemaAddCategory, req, res, next);
    },
    validateUpdateCategory(req, res, next) {
        validateSchema(schemaUpdateCategory, req, res, next);
    },
};

export default validationService;
