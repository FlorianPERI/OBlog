import APIError from '../errors/errors.api.js';
import schemaAddPost from './validations.schema.js';

const validationService = {
    /**
     * Méthode pour valider les données transmises pour ajouter un utilisateur à la BDD
     */
    addPost(req, res, next) {
        console.log(req.body);
        // Joi en cas d'erreur va retourner l'erreur dans une clef "error"
        const { error } = schemaAddPost.validate(req.body);
        console.log(error);
        if (error) {
            // Il y a une erreur de validation, je passe au middleware de gestion d'erreurs
            next(new APIError(error, 400));
        } else {
            // Il n'y a pas d'erreur, je passe au middleware suivant
            next();
        }
    },
};

export default validationService;
