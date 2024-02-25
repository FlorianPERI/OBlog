import Joi from 'joi';

/**
 * Joi schema for adding a post.
 * @type {Joi.ObjectSchema}
 */
const schemaAddPost = Joi.object({
    title: Joi.string().required(),
    slug: Joi.string().required(),
    content: Joi.string().required(),
    excerpt: Joi.string().required(),
    category: Joi.string().required(),
})
    .length(5)
    .required();

/**
 * Joi schema for updating a post.
 * @type {Joi.ObjectSchema}
 */
const schemaUpdatePost = Joi.object({
    title: Joi.string(),
    slug: Joi.string(),
    content: Joi.string(),
    excerpt: Joi.string(),
    category: Joi.string(),
})
    .min(1)
    .required();

/**
 * Joi schema for adding a category.
 * @type {Joi.ObjectSchema}
 */
const schemaAddCategory = Joi.object({
    route: Joi.string().required(),
    label: Joi.string().required(),
})
    .length(2)
    .required();

/**
 * Joi schema for updating a category.
 * @type {Joi.ObjectSchema}
 */
const schemaUpdateCategory = Joi.object({
    route: Joi.string(),
    label: Joi.string(),
})
    .min(1)
    .required();

export {
    schemaAddPost,
    schemaUpdatePost,
    schemaAddCategory,
    schemaUpdateCategory,
};
