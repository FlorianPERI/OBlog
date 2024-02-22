function manageResponse(error, result, res, next) {
    // Test s'il y a une erreur
    if (error) {
        // Express se met en mode "gestion d'erreur"
        next(error);
    } else {
        // Envoi du résultat
        res.json(result);
    }
}

export default manageResponse;
