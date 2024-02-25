import Joi from 'joi';

const schemaAddPost = Joi.object({
    title: Joi.string().required(),
    slug: Joi.string().required(),
    content: Joi.string().required(),
    excerpt: Joi.string().required(),
    category: Joi.string().required(),
})
    .length(5)
    .required();

const schemaUpdatePost = Joi.object({
    title: Joi.string(),
    slug: Joi.string(),
    content: Joi.string(),
    excerpt: Joi.string(),
    category: Joi.string(),
})
    .min(1)
    .required();

const schemaAddCategory = Joi.object({
    route: Joi.string().required(),
    label: Joi.string().required(),
})
    .length(2)
    .required();

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
