import 'dotenv/config';
import Debug from 'debug';
import router from './src/app.router.js';

import express from 'express';

const app = express();
const debug = Debug('init');

/*** AJOUT DE OPENAPI - Documentation de notre API */

// https://sebacode.medium.com/how-to-document-a-node-js-api-with-swagger-554101246a4d
import swaggerJsdoc from 'swagger-jsdoc';
import swaggerUI from 'swagger-ui-express';

const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Oblog API Documentation',
            version: '1.0.0',
        },
    },
    apis: [
        './src/posts/posts.router.js',
        './src/categories/categories.router.js',
    ], // files containing annotations as above
};

const openapiSpecification = swaggerJsdoc(options);

app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(openapiSpecification));

/***************************************************/

app.use(express.json());

app.use(router);

const PORT = process.env.PORT ?? 3000;

app.listen(PORT, () => {
    debug(`lancement de l'api sur http://localhost:${PORT}`);
});
