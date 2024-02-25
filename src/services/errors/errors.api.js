class APIError extends Error {
    constructor(err, code) {
        super(err);
        this.code = code;
    }
}

export default APIError;
