import { postDatamapper } from '../datamappers/index.js';

const postController = {
    async findAll(req, res) {
        const result = await postDatamapper.findAll();
        console.log(result);
        res.json(result);
    },
};

export default postController;
