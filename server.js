import 'dotenv/config';
import Debug from 'debug';
import router from './src/app.router.js';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
//import GranthAi from 'granthai';
import swaggerUi from 'swagger-ui-express';
import swaggerDocument from './swagger.json' with { type: "json" };

import express from 'express';

const app = express();
const debug = Debug('init');

/* Used to create Swagger json file
// app.use(
//     GranthAi({
//         docTitle: 'Oblog API',
//         baseUrl: 'http://localhost:3000/',
//         key: '...',
//     })
// );
*/

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use(express.json());

app.get('/', (req, res) => {
    const htmlFilePath = join(__dirname, './src/views/index.html');
    res.sendFile(htmlFilePath);
});
app.use(router);

const PORT = process.env.PORT ?? 3000;

app.listen(PORT, () => {
    debug(`lancement de l'api sur http://localhost:${PORT}`);
});
