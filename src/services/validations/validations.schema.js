import Joi from 'joi';

/**
 * Le schéma va indiquer ce qui est attendu comme informations dans les données transmises à l'API
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

export default schemaAddPost;
