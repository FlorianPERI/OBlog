import 'dotenv/config';
import Debug from 'debug';
import router from './src/app.router.js';

import express from 'express';

const app = express();
const debug = Debug('init');

app.use(express.json());

app.use(router);

const PORT = process.env.PORT ?? 3000;

app.listen(PORT, () => {
    debug(`lancement de l'api sur http://localhost:${PORT}`);
});
