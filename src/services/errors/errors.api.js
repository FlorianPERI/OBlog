class APIError extends Error {
    // le constructor de APIError va être appelé quand on fait "new APIError"
    constructor(err, code) {
        // appel du constructor du parent "new Error"
        super(err);

        this.code = code;
    }
}

export default APIError;
