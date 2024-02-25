import { access, constants, appendFile } from 'node:fs/promises';
import Debug from 'debug';
const debug = Debug('errors');
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import APIError from './errors.api.js';
import { format } from 'date-fns';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

/**
 * Service pour gérer les erreurs.
 * @type {Object}
 */
const errorsService = {
    /**
     * Gestion des erreurs.
     * @param {APIError} err - L'objet d'erreur API.
     * @param {import('express').Request} req - L'objet de requête Express.
     * @param {import('express').Response} res - L'objet de réponse Express.
     * @param {import('express').NextFunction} _ - La fonction next Express.
     */
    manageError: (err, req, res, _) => {
        debug(err);

        errorsService.logError(err, req.url);

        res.status(err.code).json(err.message);
    },

    /**
     * Enregistrement de l'erreur dans un fichier .log.
     * @async
     * @param {APIError} err - L'objet d'erreur API.
     * @param {string} url - L'URL de la requête.
     */
    logError: async (err, url) => {
        const currentDate = format(new Date(), 'yyyy-MM-dd');
        const logPath = '../../../logs/';
        const fileName = `${currentDate}.log`;
        let fileExist = false;

        const filePath = join(__dirname, logPath + fileName);

        try {
            await access(filePath, constants.R_OK);
            debug('can access');

            fileExist = true;
        } catch (err) {
            debug(err);
            debug('cannot access');
        }

        if (!fileExist) {
            const content = 'Heure|Url|Message|Code|StackTrace|\n';

            await appendFile(filePath, content);
        }

        const errorContent = `${new Date().toTimeString()}|${url}|${
            err.message
        }|${err.code}|${err.stack}\n`;

        await appendFile(filePath, errorContent);
    },

    /**
     * Gestionnaire pour les erreurs 404.
     * @param {import('express').Request} req - L'objet de requête Express.
     * @param {import('express').Response} res - L'objet de réponse Express.
     * @param {import('express').NextFunction} next - La fonction next Express.
     */
    _404: (req, res, next) => {
        next(new APIError('Url non trouvée', 404));
    },
};

export default errorsService;
