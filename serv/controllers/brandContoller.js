import {brand} from '../models/models.js';

class BrandContoller {
    async addBrand(req, res) {
        const name = req.body.name;
        console.log('reqbody', req.body);
        const brandobj = await brand.create({name});
        return res.json(brandobj); 
    }

    async getAll(req, res) {
        const brandobj = await brand.findAll();
        return res.json(brandobj);
    }
}

export default new BrandContoller();