import {type} from '../models/models.js';

class TypeContoller {
    async addType(req, res) {
        const name = req.body.name;
        console.log('reqbody', req.body);
        const typeobj = await type.create({name});
        return res.json(typeobj); 
    }

    async getAll(req, res) {
        const typeobj = await type.findAll();
        return res.json(typeobj);
    }
}

export default new TypeContoller();